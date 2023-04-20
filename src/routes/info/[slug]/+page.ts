import type { PostContent } from "$lib/types";
export const prerender = false;
export async function load({ params }): Promise<PostContent> {
    const post = await import(`../${params.slug}.md`);
    const meta = post.metadata;
    const Content = post.default;

    return { meta, Content };
}
