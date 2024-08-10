import type { PostContent, PostMetadata } from "$lib/types";
import type { Component } from "svelte";

export const prerender = false;

// params:
// Parameters of the target page - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object.
export async function load({ params }): Promise<PostContent> {
    // no idea if these types are correct
    const post: { metadata: PostMetadata; default: Component } = await import(
        `../${params.slug}.md`
    );
    const meta = post.metadata;
    const Content = post.default;

    return { meta, Content };
}
