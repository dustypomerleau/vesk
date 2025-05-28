<script lang="ts">
    import type { PostMetadata } from "$lib/types";

    let { meta }: { meta: PostMetadata } = $props();
    const { author, creds, image } = meta;
</script>

<div class="byline">
    <div class="avatar-container">
        <picture>
            <source type="image/avif" srcset="/{image}.avif" />
            <source type="image/webp" srcset="/{image}.webp" />
            <img src="/{image}.webp" alt={author} class="avatar" />
        </picture>
    </div>
    <div class="author-container">
        <div class="author">{author}</div>
        <div class="creds">{creds}</div>
    </div>
</div>

<style>
    .author {
        font-size: var(--fs-lg);
    }

    .author-container {
        display: flex;
        flex-direction: column;

        color: var(--gray-8);
    }

    .avatar {
        height: calc(var(--space-4) * 6);
        object-fit: cover;
    }

    .avatar-container {
        --dim: calc(var(--space-4) * 5);

        border-radius: calc(var(--radius-lg) * 3);
        height: var(--dim);
        min-height: 5rem;
        min-width: 5rem;
        overflow: hidden;
        width: var(--dim);
    }

    .byline {
        display: flex;
        align-items: center;
        gap: var(--space-4);
    }

    .creds {
        color: var(--gray-7);
        font-size: var(--fs-sm);
        line-height: 0;
    }
</style>
