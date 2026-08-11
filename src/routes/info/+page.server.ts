// import type { PostPath } from "$lib/types.js";
import { getInfoPosts } from "$lib/utils";
// import type { PageLoadEvent } from "./$types";

export const load =
    // async ({ fetch }: PageLoadEvent): Promise<{ posts: Array<PostPath> }> => {
    // const response = await fetch("/api/info");
    // const posts = await response.json();
    // console.log(JSON.stringify(posts));

    // For now, remove the API endpoint from the loop and directly load the data on the server.
    async () => {
        const posts = await getInfoPosts();
        return { posts };
    };
