<script lang="ts">
    import EyeConditions from "$lib/components/EyeConditions.svelte";
    import type { PostPath } from "$lib/types";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    const { posts }: { posts: Array<PostPath> } = data;
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Treatments</title>
</svelte:head>

<!-- todo: EyeConditions should be generic so that we can use it for both treatments and conditions, but to do that we need to rename it and pass another param. -->
<EyeConditions {posts} />
