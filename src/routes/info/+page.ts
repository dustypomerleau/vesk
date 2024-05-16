import type { PostPath } from "$lib/types.js";
import type { PageLoadEvent } from "./$types";

export const load = async ({ fetch }: PageLoadEvent): Promise<{ posts: Array<PostPath> }> => {
    const response = await fetch("/api/info");
    const posts = await response.json();
    // console.log("load function returns posts as: ", posts);
    return { posts };
};
