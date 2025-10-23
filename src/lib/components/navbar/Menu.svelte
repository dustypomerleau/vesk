<script lang="ts">
    import type { MenuProps } from "$lib/types";
    import { getContext } from "svelte";

    let {
        size = "24",
        color = "currentColor",
        variation = "outline",
        ariaLabel = "bars 3",
    }: MenuProps = $props();

    let svgpath: string = $state("");
    let viewBox: string = $state("0 0 24 24");

    let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;

    let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;

    $effect(() => {
        switch (variation) {
            case "outline":
                svgpath = svgoutline;
                break;
            case "solid":
                svgpath = svgsolid;
                break;
            default:
                svgpath = svgoutline;
        }
    });
</script>

<div class="hide-on-desktop">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        role="button"
        tabindex="0"
        width={size}
        height={size}
        aria-label={ariaLabel}
        fill="none"
        {viewBox}
        stroke-width="2"
    >
        {@html svgpath}
    </svg>
</div>

<style>
    .hide-on-desktop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (width >= 53rem) {
            display: none;
        }
    }
</style>
