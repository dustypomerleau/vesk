import type { PostContent, PostMetadata } from "$lib/types";
import type { Component } from "svelte";

// params:
// Parameters of the target page - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object.
export async function load({ params }: { params: { slug: string } }): Promise<PostContent> {
    const { metadata: meta, default: Content }: { metadata: PostMetadata; default: Component } =
        await import(`../${params.slug}.md`);

    return { meta, Content };
}
