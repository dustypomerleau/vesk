import type { PostMetadata, PostPath } from "$lib/types";
import type { Component } from "svelte";
import { render } from "svelte/server";

export const getFigureBreakpointWidth = (size = "large") => {
    const widths: { [size: string]: string } = {
        small: "sm:w-2/3",
        medium: "sm:w-3/4",
        large: "sm:w-5/6",
    };

    return widths[size] ? widths[size] : size;
};

export const getPosts = async (): Promise<Array<PostPath>> => {
    // import.meta.glob() is a Vite function that returns an object with (in this case) keys of path and values of resolver functions that take no params and return the result of importing the file.
    // I'm still a bit fuzzy on the details, but it looks like casting the type with turbofish here tells the resolver function what type it will return when called (even though the return type is actually the function itself).
    // todo: try making this eager and following:
    // https://blog.shabad22.com/articles/svelte-mdsvex
    // I'm not convinced it will make any difference, as it still uses svelte 4 syntax
    const postFiles = import.meta.glob("/src/routes/info/*.md", {
        eager: true,
    });

    // debugging - remove later
    console.log(postFiles);
    const values = Object.values(postFiles);
    console.log(values);
    values.map((value) => console.log(value.metadata)); // Ok
    values.map((value) => console.log(render(value.default()))); // Not Ok

    // // Object.entries returns an array of arrays, where each array is a KV pair from the object.
    // const iterableFiles = Object.entries(postFiles);
    //
    // // Here, calling the resolver() (essentially calling import on the md file) returns the files' metadata as metadata:.
    // const posts: Array<PostPath> = await Promise.all(
    //     iterableFiles.map(async ([path, resolver]) => {
    //         const { metadata } = await resolver();
    //         // trim /src/routes and .md to get the URL
    //         const postPath = path.slice(11, -3);
    //
    //         return { meta: metadata, path: postPath };
    //     }),
    // );
    //
    // return posts;
};
