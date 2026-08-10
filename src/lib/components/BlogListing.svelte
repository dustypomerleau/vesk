<script lang="ts">
    import type { PostPath } from "$lib/types";

    let { post }: { post: PostPath } = $props();

    const {
        meta: { brief },
        path,
    } = post;
</script>

<a href={path}>
    <div class="brief">
        <h3>{brief}</h3>
    </div>
</a>

<style>
    .brief {
        display: flex;
        flex-direction: column;

        width: 100%;

        h3 {
            font-weight: var(--fw-semibold);
        }
    }

    a {
        display: flex;
        gap: var(--space-2);

        border-radius: var(--radius-md);
        padding-block: var(--space-2);

        &:hover {
            background-color: var(--gray-1);
        }
    }
</style>
