<script lang="ts">
    import Info from "$lib/components/Info.svelte";
    import type { PostPath } from "$lib/types";

    let { posts }: { posts: Array<PostPath> } = $props();
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Patient information</title>
</svelte:head>

<Info {posts} />
