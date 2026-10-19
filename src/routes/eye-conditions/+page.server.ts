import { getPosts } from "#lib/utils.ts";
import { PostType, type Posts } from "#lib/types.ts";

export const load = async (): Promise<Posts> => {
    const posts = await getPosts(PostType.Condition);
    return { posts };
};