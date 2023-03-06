export const getPosts = async () => {
    const postFiles = import.meta.glob("/src/routes/info/*.md");
    const iterableFiles = Object.entries(postFiles);

    const posts = await Promise.all(
        iterableFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            // trim /src/routes and .md to get the URL
            const postPath = path.slice(11, -3);

            return { meta: metadata, path: postPath };
        })
    );

    return posts;
};
