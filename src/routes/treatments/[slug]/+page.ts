import type { PostContent, PostMetadata } from "$lib/types";
import type { Component } from "svelte";

export async function load({ params }: { params: { slug: string } }): Promise<PostContent> {
    const { metadata: meta, default: Content }: { metadata: PostMetadata; default: Component } =
        await import(`../${params.slug}.md`);

    return { meta, Content };
}
