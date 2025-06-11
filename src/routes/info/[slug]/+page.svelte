<script lang="ts">
    import Byline from "$lib/components/Byline.svelte";
    import type { PostContent } from "$lib/types";

    let { data } = $props();

    const {
        meta,
        meta: { brief, title },
        Content,
    }: PostContent = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | {brief}</title>
</svelte:head>

<div class="article-container">
    <article>
        <h1>{title}</h1>
        <div><Byline {meta} /></div>
        <div class="divider"></div>
        <div class="content"><Content /></div>
    </article>
</div>

<style>
    .article-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: white;
        font-size: var(--fs-xl);
        padding-block-end: var(--space-4);

        @media (width >= 40rem) {
            padding-inline: var(--space-4);
        }
    }
</style>
