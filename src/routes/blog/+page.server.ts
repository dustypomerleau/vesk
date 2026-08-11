// import type { PostPath } from "$lib/types.js";
import { getBlogPosts } from "$lib/utils";
// import type { PageLoadEvent } from "./$types";

export const load =
    // async ({ fetch }: PageLoadEvent): Promise<{ posts: Array<PostPath> }> => {
    // const response = await fetch("/api/blog");
    // const posts = await response.json();

    // For now, remove the API endpoint from the loop and directly load the data on the server.
    async () => {
        const posts = await getBlogPosts();
        return { posts };
    };
