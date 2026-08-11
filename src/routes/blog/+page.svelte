<script lang="ts">
    import Blog from "$lib/components/Blog.svelte";
    import type { PostPath } from "$lib/types";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const { posts }: { posts: Array<PostPath> } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Blog</title>
</svelte:head>

<Blog {posts} />
