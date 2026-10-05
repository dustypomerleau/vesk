<script lang="ts">
    import IconList from "$lib/components/IconList.svelte";
    import type { PostPath } from "$lib/types";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const { posts }: { posts: Array<PostPath> } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Eye Conditions</title>
</svelte:head>

<EyeConditions {posts} />
