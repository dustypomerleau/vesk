<script lang="ts">
    import type { SvgFigure } from "$lib/types";

    export let figure: SvgFigure;
    // If width is not supplied in the markdown file, the default width here will override the default width on the SVG component.
    const { svg, viewBox, width = "w-full", caption } = figure;
</script>

<div class="not-prose flex flex-col items-center">
    <!-- you can apply text-color, gradient, etc. to the svg on this container div -->
    <div class="{width} flex flex-col items-center overflow-hidden rounded-lg">
        <svelte:component this={svg} {viewBox} />
    </div>
    {#if caption}
        <div class="{width} p-1 text-base text-gray-500">
            {caption}
        </div>
    {/if}
</div>
