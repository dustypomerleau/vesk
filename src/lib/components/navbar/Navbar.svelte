<script lang="ts">
    import { setContext } from "svelte";
    import NavContainer from "./NavContainer.svelte";
    import type { NavbarState, NavbarProps } from "$lib/types";

    let { children }: NavbarProps = $props();
    let navState = $state({ hidden: true });
    setContext<NavbarState>("navState", navState);
    // Add reference to the navbar element
    let navbarElement: HTMLElement;

    let toggle = () => {
        navState.hidden = !navState.hidden;
    };

    function handleDocumentClick(event: MouseEvent) {
        // Check if the click was outside the navbar AND the dropdown is open
        if (!navState.hidden && navbarElement && !navbarElement.contains(event.target as Node)) {
            navState.hidden = true;
        }
    }
</script>

<svelte:document onclick={handleDocumentClick} />

<nav bind:this={navbarElement} class="navbar">
    <!-- todo: you need a different type definition, rather than NavbarProps, before you can remove NavContainer, even though you aren't using it. -->
    {@render children({ hidden: navState.hidden, toggle })}
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }
</style>
