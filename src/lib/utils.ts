import type { PostMetadata, PostPath } from "$lib/types";
import type { Component } from "svelte";
import { render } from "svelte/server";

export const getPosts = async (): Promise<Array<PostPath>> => {
    const postFiles = import.meta.glob("/src/routes/info/*.md");
    const values = Object.values(postFiles);
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
