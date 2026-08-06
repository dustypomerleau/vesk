import type { PostPath } from "$lib/types";
import { getBlogPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async (): Promise<Response> => {
    const posts = await getBlogPosts();

    const sortedPosts: Array<PostPath> = posts.sort((a, b) => {
        return new Date(a.meta.date).valueOf() - new Date(b.meta.date).valueOf();
    });

    return json(sortedPosts);
};
