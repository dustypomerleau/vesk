import { PostType, type Posts } from "#lib/types.ts";
import { getPosts } from "#lib/utils.ts";

export const load = async (): Promise<Posts> => {
    const posts = await getPosts(PostType.Blog);
    return { posts };
};
