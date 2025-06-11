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
    <!-- todo: the article tag previously had tailwind prose class and may need to be tweaked -->
    <!-- conversely, the div wrapping Byline had to be marked not prose, so really only the content div needs tweaking -->
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
        justify-content: center;

        background-color: white;
    }
</style>
