import { getBlogPosts } from "$lib/utils";

export const load = async () => {
    const posts = await getBlogPosts();
    return { posts };
};
