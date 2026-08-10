<script lang="ts">
    import BlogListing from "$lib/components/BlogListing.svelte";
    import type { PostPath } from "$lib/types";

    let { posts }: { posts: Array<PostPath> } = $props();
</script>

<div id="info" class="info hash-target">
    <!-- todo: should these headers be sections for accessibility? -->
    <div class="section-header">Blog</div>

    <ul class="posts">
        {#each posts as post}
            <BlogListing {post} />
        {/each}
    </ul>
</div>

<style>
    .info {
        align-self: center;

        border-radius: var(--radius-md);
        padding-block: var(--space-6);
    }

    .posts {
        display: grid;
        column-gap: calc(var(--space-4) * 4);
        row-gap: var(--space-2);

        @media (width >= 40rem) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        font-size: var(--fs-lg);
    }
</style>
