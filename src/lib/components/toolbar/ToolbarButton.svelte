<script lang="ts">
    import type { ToolbarButtonProps } from "$lib/types";

    let {
        children,
        color,
        name,
        "aria-label": ariaLabel,
        size,
        ...restProps
    }: ToolbarButtonProps = $props();
</script>

{#if restProps.href === undefined}
    <button type="button" {...restProps} class="burger-button" aria-label={ariaLabel ?? name}>
        {#if name}<span class="sr-only">{name}</span>{/if}
        {@render children?.()}
    </button>
{:else}
    <a {...restProps} class="burger-button" aria-label={ariaLabel ?? name}>
        {#if name}<span class="sr-only">{name}</span>{/if}
        {@render children?.()}
    </a>
{/if}

<style>
    .burger-button {
        display: flex;
        flex-direction: column;
        justify-content: center;

        color: var(--gray-4);
        background-color: var(--blue-10);
        /* enlarge the horizontal click target */
        width: 4rem;

        @media (width >= 53rem) {
            display: none;
        }
    }
</style>
