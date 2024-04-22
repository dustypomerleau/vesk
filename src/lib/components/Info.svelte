<script lang="ts">
    import Listing from "$lib/components/Listing.svelte";
    import type { PostPath } from "$lib/types";

    let { data } = $props();
</script>

<div id="info" class="self-center rounded-md py-6">
    <div class="px-4 pb-3 text-center text-2xl font-semibold md:text-left">Patient Information</div>

    <ul class="grid gap-x-16 sm:grid-cols-2">
        <!-- todo: error here undefined is not iterable, so there is a problem with the posts getting passed in (therefore probably the function generating them -->
        <!-- specifically, the props being passed into Info are undefined -->
        {#each data.posts as post}
            <Listing {post} />
        {/each}
    </ul>
</div>
