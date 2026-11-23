<script lang="ts">
    import ArticleList from "#lib/components/ArticleList.svelte";
    import type { PostPath } from "#lib/types.ts";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const { posts }: { posts: Array<PostPath> } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Treatments</title>
</svelte:head>

<ArticleList {posts} />
