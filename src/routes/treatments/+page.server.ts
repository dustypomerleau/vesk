import { getPosts } from "$lib/utils";
import { PostType, type Posts } from "$lib/types";

export const load = async (): Promise<Posts> => {
    const posts = await getPosts(PostType.Treatment);
    return { posts };
};
