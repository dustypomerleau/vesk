<script lang="ts">
    import Blog from "$lib/components/Blog.svelte";
    import type { PostPath } from "$lib/types";

    let { posts }: { posts: Array<PostPath> } = $props();
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Blog</title>
</svelte:head>

<Blog {posts} />
