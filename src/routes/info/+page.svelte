<script>
    import Listing from "$lib/components/Listing.svelte";
    export let data;
</script>

<!-- todo: what is the best margin for this page on mobile and desktop -->
<!-- revisit margins more broadly - at what level should you enforce them? -->
<!-- consider just centering the patient info title? -->
<div>
    <div class="ml-9 mr-4 mt-2 text-2xl font-semibold">Patient Information</div>

    <ul>
        {#each data.posts as post}
            <Listing {post} />
        {/each}
    </ul>
</div>
