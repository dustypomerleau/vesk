import { getBlogPosts } from "#lib/utils.ts";

export const load = async (): Promise<Posts> => {
    const posts = await getPosts(PostType.Blog);
    return { posts };
};
