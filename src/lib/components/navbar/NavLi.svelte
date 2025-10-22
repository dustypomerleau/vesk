<script lang="ts">
    import type { NavbarState, NavLiProps } from "$lib/types";
    import { getContext } from "svelte";

    let navState = getContext<NavbarState>("navState");
    let { children, onclick, activeClass, nonActiveClass, ...restProps }: NavLiProps = $props();
    let active = $derived(navState.activeUrl ? restProps.href === navState.activeUrl : false);

    function handleClick(event: any) {
        // Close the mobile menu when a link is clicked
        if (restProps.href !== undefined && !navState.hidden) {
            navState.hidden = true;
        }

        // Call original onclick handler if provided
        if (onclick) {
            onclick(event);
        }
    }
</script>

{#if restProps.href === undefined}
    <button role="presentation" onclick={handleClick} {...restProps}>
        <li class="menu-item">
            {@render children?.()}
        </li>
    </button>
{:else}
    <a onclick={handleClick} {...restProps}>
        <li class="menu-item">
            {@render children?.()}
        </li>
    </a>
{/if}

<style>
    .menu-item {
        padding-inline-start: var(--space-6);
        padding-inline-end: var(--space-8);
        padding-block: var(--space);
        border-radius: var(--radius-sm);

        &:hover {
            background-color: color-mix(in oklab, var(--blue-10) 92%, white);
            text-decoration: underline;
        }
    }
</style>
