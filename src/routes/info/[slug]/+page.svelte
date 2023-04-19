<script lang="ts">
    import Byline from "$lib/components/Byline.svelte";
    import type { PostContent } from "$lib/types";

    export let data: PostContent;
    const {
        meta,
        meta: { brief, title },
        Content
    } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | {brief}</title>
</svelte:head>

<div class="flex justify-center bg-white">
    <article class="prose m-6">
        <h1 class="mb-0 pb-4 text-gray-600">{title}</h1>
        <div class="not-prose"><Byline {meta} /></div>
        <div class="mt-6 h-[2px] bg-gradient-to-r from-gray-300 to-gray-100" />
        <div class="text-lg text-gray-600"><Content /></div>
    </article>
</div>
