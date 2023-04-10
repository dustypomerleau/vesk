export const getPosts = async (): Promise<Array<Post>> => {
    const postFiles = import.meta.glob<Record<string, PostMetadata>>(
        "/src/routes/info/*.md"
    );
    const iterableFiles = Object.entries(postFiles);

    // Object.entries returns an array of arrays, where each array is a KV pair from the object
    // That means postFiles returns an object with keys of path and values of resolver functions that take no params and return the result of importing the file.
    // In this case, calling the resolver() (essentially calling import on the md file) appears to return the files metadata as metadata (I think it also returns the content as default, but we aren't binding it here)
    const posts: Array<Post> = await Promise.all(
        iterableFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            // trim /src/routes and .md to get the URL
            const postPath = path.slice(11, -3);

            return { meta: metadata, path: postPath };
        })
    );

    return posts;
};
