import type { PostPath } from "$lib/types.js";

export const load = async ({ fetch }): Promise<{ posts: Array<PostPath> }> => {
    const response = await fetch("/api/info");
    const posts = await response.json();
    return { posts };
};
