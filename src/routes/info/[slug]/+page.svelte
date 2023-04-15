<script lang="ts">
    import Byline from "$lib/components/Byline.svelte";

    export let data;
    const {
        meta,
        meta: { brief, title },
        Content
    } = data; // allows <Content /> instead of data.content
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | {brief}</title>
</svelte:head>

<div class="bg-white">
    <article class="prose m-4 sm:m-6">
        <h1 class="mb-4 text-gray-600">{title}</h1>
        <div class="not-prose"><Byline {meta} /></div>
        <div class="mt-6 h-[2px] bg-gradient-to-r from-gray-300 to-gray-100" />
        <div class="text-lg text-gray-600"><Content /></div>
    </article>
</div>
