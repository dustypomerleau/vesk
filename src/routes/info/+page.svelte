<script lang="ts">
    import Info from "$lib/components/Info.svelte";
    import type { PostPath } from "$lib/types";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const { posts }: { posts: Array<PostPath> } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Patient information</title>
</svelte:head>

<Info {posts} />
