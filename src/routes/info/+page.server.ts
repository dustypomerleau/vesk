import { getInfoPosts } from "#lib/utils.ts";

export const load = async () => {
    const posts = await getInfoPosts();
    return { posts };
};
