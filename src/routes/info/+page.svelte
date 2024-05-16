<script lang="ts">
    import Info from "$lib/components/Info.svelte";
    import type { PostPath } from "$lib/types";

    let { data } = $props();
    console.log("posts props passed to info/+page.svelte: ", data);
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Patient information</title>
</svelte:head>

<Info {data} />
