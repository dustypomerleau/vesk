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

<!-- todo: you probably want the whole bg white here, and then tone down title text to match -->
<article class="prose m-4 sm:m-6">
    <h1 class="text-gray-700">{title}</h1>
    <Byline {meta} />
    <Content />
</article>
