import { getInfoPosts } from "$lib/utils";

export const load = async () => {
    const posts = await getInfoPosts();
    return { posts };
};
