<script>
    import Listing from "$lib/components/Listing.svelte";
    export let data;
</script>

<!-- todo: what is the best margin for this page on mobile and desktop -->
<div>
    <div class="mx-10 mt-2 text-2xl font-semibold">Patient Information</div>

    <ul>
        {#each data.posts as post}
            <Listing {post} />
        {/each}
    </ul>
</div>
