<script lang="ts">
    import Blog from "#lib/components/Blog.svelte";
    import type { PostPath, PostType } from "#lib/types.ts";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const { posts, kind }: { posts: Array<PostPath>; kind: PostType } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Blog</title>
</svelte:head>

<Blog {posts} />
