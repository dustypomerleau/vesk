import { getBlogPosts } from "#lib/utils.ts";

export const load = async () => {
    const posts = await getBlogPosts();
    return { posts };
};