<script lang="ts">
    import Listing from "$lib/components/Listing.svelte";
    import type { PostPath } from "$lib/types";

    let { posts }: { posts: Array<PostPath> } = $props();
</script>

<div id="info" class="info">
    <div class="info-header">Patient Information</div>

    <ul class="posts">
        {#each posts as post}
            <Listing {post} />
        {/each}
    </ul>
</div>

<style>
    .info {
        align-self: center;

        border-radius: var(--radius-md);
        padding-block: var(--space-6);
    }

    .info-header {
        font-weight: var(--fw-semibold);
        padding-block-end: var(--space-3);
        padding-inline: var(--space-4);
        text-align: center;

        @media (width >= 48rem) {
            text-align: start;
        }
    }

    .posts {
        display: grid;
        column-gap: calc(var(--space-4) * 4);

        @media (width >= 40rem) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>
