<script lang="ts">
    import { getTheme } from "$lib/theme/themeUtils";
    import type { NavbarState, NavLiProps, NavbarBreakpoint } from "$lib/types";
    import clsx from "clsx";
    import { getContext } from "svelte";
    import { navbarLi } from "./theme";

    let navState = getContext<NavbarState>("navState");
    let navBreakpoint = getContext<NavbarBreakpoint>("breakpoint");

    let {
        children,
        onclick,
        activeClass,
        nonActiveClass,
        class: className,
        ...restProps
    }: NavLiProps = $props();

    const theme = getTheme("navbarLi");

    let active = $derived(navState.activeUrl ? restProps.href === navState.activeUrl : false);
    let liClass = $derived(
        navbarLi({
            breakpoint: navBreakpoint,
            hidden: navState.hidden,
            class: clsx(
                active
                    ? (activeClass ?? navState.activeClass)
                    : (nonActiveClass ?? navState.nonActiveClass),
                theme,
                className,
            ),
        }),
    );

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

<!-- <li class="menu-item"> -->
{#if restProps.href === undefined}
    <button role="presentation" onclick={handleClick} {...restProps} class={liClass}>
        <li class="menu-item">
            {@render children?.()}
        </li>
    </button>
{:else}
    <a {...restProps} onclick={handleClick}>
        <li class="menu-item">
            {@render children?.()}
        </li>
    </a>
{/if}

<!-- </li> -->

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1122)
## Props
@prop children
@prop onclick
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->

<style>
    .menu-item {
        padding-inline: var(--space-4);
        padding-block: var(--space);
        border-radius: var(--radius-sm);

        &:hover {
            background-color: color-mix(in oklab, var(--blue-10) 92%, white);
            text-decoration: underline;
        }
    }
</style>
