<script>
    export let data;
    const { author, title, Content } = data; // allows <Content /> instead of data.content
</script>

<article class="prose">
    <h1>{title}</h1>
    <Content />
</article>
