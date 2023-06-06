import type { PostPath } from "$lib/types";
import { getPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async (): Promise<Response> => {
    const posts = await getPosts();

    const sortedPosts: Array<PostPath> = posts.sort((a, b) => {
        return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
    });

    return json(sortedPosts);
};
