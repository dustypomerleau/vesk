<script lang="ts">
    export let data;
    const { author, creds, title, Content } = data; // allows <Content /> instead of data.content
</script>

<!-- <Author /> -->
<article class="prose">
    <h1>{title}</h1>
    <!-- <Byline {author, creds} /> -->
    <Content />
</article>
