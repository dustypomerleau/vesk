import type { PostMetadata, PostPath } from "$lib/types";

export const getPosts = async (): Promise<Array<PostPath>> => {
    // import.meta.glob() is a Vite function that returns an object with (in this case) keys of path and values of resolver functions that take no params and return the result of importing the file.
    // I'm still a bit fuzzy on the details, but it looks like casting the type with turbofish here tells the resolver function what type it will return when called (even though the return type is actually the function itself).
    const postFiles = import.meta.glob<Record<string, PostMetadata>>(
        "/src/routes/info/*.md"
    );
    // Object.entries returns an array of arrays, where each array is a KV pair from the object.
    const iterableFiles = Object.entries(postFiles);

    // Here, calling the resolver() (essentially calling import on the md file) returns the files' metadata as metadata:.
    const posts: Array<PostPath> = await Promise.all(
        iterableFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            // trim /src/routes and .md to get the URL
            const postPath = path.slice(11, -3);

            return { meta: metadata, path: postPath };
        })
    );

    return posts;
};
