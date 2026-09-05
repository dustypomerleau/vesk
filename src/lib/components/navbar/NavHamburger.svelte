<script lang="ts">
    import { getContext } from "svelte";
    import ToolbarButton from "../toolbar/ToolbarButton.svelte";
    import Menu from "./Menu.svelte";
    import type { NavbarState, NavHamburgerProps } from "$lib/types";
    import type { MouseEventHandler } from "svelte/elements";

    let { name = "Open main menu" }: NavHamburgerProps = $props();
    const navState = getContext<NavbarState>("navState");

    const toggle_hidden: MouseEventHandler<HTMLButtonElement> = (ev) => {
        navState.hidden = !navState.hidden;
    };
</script>

<ToolbarButton {name} onclick={toggle_hidden}>
    <Menu />
</ToolbarButton>
