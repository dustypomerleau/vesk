<!-- todo: create a FigStack so that you can wrap sequential figs or lay out horizontally depending on the screen -->

<script lang="ts">
    import { getFigureBreakpointWidth } from "$lib/utils";
    import type { SvgFig } from "$lib/types";

    export let figure: SvgFig;
    // at present, these text size/color customizations are not playing nicely with mdsvex, so basically whatever is the default here will be used, regardless of what you specify in the markdown file
    const {
        svg,
        viewBox,
        width = "100%",
        size,
        caption,
        textSize = "text-base",
        textColor = "text-gray-7",
    } = figure;
    const smallBreakpointWidth = size ? getFigureBreakpointWidth(size) : "";
</script>

<div class="flex flex-col items-center gap-2">
    <!-- you can apply text-color, gradient, etc. to the svg using styles/classes on this container div -->
    <div
        class="w-full {smallBreakpointWidth} flex flex-col items-center overflow-hidden rounded-lg"
    >
        <!-- You need to specify width relative to the container div, so that if the SVG also specifies a width, it will be overridden. -->
        <svelte:component this={svg} {viewBox} {width} />
    </div>
    {#if caption}
        <div class="w-full {smallBreakpointWidth} px-2 text-center {textSize} {textColor}">
            {caption}
        </div>
    {/if}
</div>
