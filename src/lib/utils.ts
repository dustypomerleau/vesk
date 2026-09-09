import { PostType, type PostMetadata, type PostPath } from "$lib/types";

// Using a variable for the glob path is not permitted, so we can't pass the path directly as a parameter.
export const getPosts = async (postType: PostType): Promise<Array<PostPath>> => {
    let postFiles: Record<string, () => Promise<{ metadata: PostMetadata }>>;

    switch (postType) {
        case PostType.Blog: {
            postFiles = import.meta.glob("/src/routes/blog/*.md");
            break;
        }
        case PostType.Condition: {
            postFiles = import.meta.glob("/src/routes/eye-conditions/*.md");
            break;
        }
        case PostType.Treatment: {
            postFiles = import.meta.glob("/src/routes/treatments/*.md");
            break;
        }
    }

    const iterableFiles = Object.entries(postFiles);

    const posts: Array<PostPath> = await Promise.all(
        iterableFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            // trim /src/routes and .md to get the URL
            const postPath = path.slice(11, -3);

            return { meta: metadata, path: postPath };
        }),
    );

    return posts;
};
