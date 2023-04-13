<script lang="ts">
    export let data;
    const { author, brief, creds, title, Content } = data; // allows <Content /> instead of data.content
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | {brief}</title>
</svelte:head>

<!-- <Author /> -->
<article class="prose">
    <h1>{title}</h1>
    <!-- <Byline {author, creds} /> -->
    <Content />
</article>
