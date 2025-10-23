<script lang="ts">
    import type { NavbarState, NavUlProps } from "$lib/types";
    import { getContext } from "svelte";
    import { sineIn } from "svelte/easing";
    import { fade, fly, scale, slide } from "svelte/transition";

    let navState = getContext<NavbarState>("navState");

    let {
        activeUrl = $bindable(),
        children,
        transition = slide,
        transitionParams,
        ...restProps
    }: NavUlProps = $props();

    // Default parameters for different transitions
    const getDefaultParams = (transitionFn: any) => {
        if (transitionFn === slide) return { delay: 0, duration: 200, easing: sineIn };
        if (transitionFn === fly) return { delay: 0, duration: 200, y: -10, easing: sineIn };
        if (transitionFn === fade) return { delay: 0, duration: 200, easing: sineIn };
        if (transitionFn === scale) return { delay: 0, duration: 200, start: 0.95, easing: sineIn };
        return { delay: 0, duration: 200, easing: sineIn };
    };

    const defaultParams = $derived(getDefaultParams(transition));
    const finalParams = $derived(transitionParams ?? defaultParams);
    let hidden: boolean = $derived(navState.hidden ?? true);
</script>

{#if !hidden}
    <div {...restProps} class="unhidden" transition:transition={finalParams}>
        <ul>
            {@render children?.()}
        </ul>
    </div>
{:else}
    <div {...restProps} class="hidden">
        <ul>
            {@render children?.()}
        </ul>
    </div>
{/if}

<style>
    .unhidden {
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 50;
        background-color: var(--blue-10);
        color: var(--gray-2);
        padding: var(--space);
        padding-block-end: var(--space-2);
        border-bottom-left-radius: var(--radius-md);

        ul {
            display: flex;
            flex-direction: column;
        }
    }

    .hidden {
        display: none;
    }

    @media (width >= 53rem) {
        .unhidden,
        .hidden {
            display: flex;
            color: var(--gray-2);
            font-size: var(--fs-sm);

            ul {
                display: flex;
                align-items: center;
            }
        }
    }
</style>
