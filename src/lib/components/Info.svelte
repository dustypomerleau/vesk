<script lang="ts">
    import Listing from "$lib/components/Listing.svelte";
    import type { PageData } from "../../routes/$types";

    export let data: PageData;
</script>

<div id="info" class="self-center rounded-md py-6">
    <div class="px-4 pb-3 text-center text-2xl font-semibold  md:text-left">
        Patient Information
    </div>

    <ul class="grid gap-x-16 sm:grid-cols-2">
        {#each data.posts as post}
            <Listing {post} />
        {/each}
    </ul>
</div>
