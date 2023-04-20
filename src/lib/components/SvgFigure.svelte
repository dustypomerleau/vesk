<script lang="ts">
    import type { SvgFigure } from "$lib/types";

    export let figure: SvgFigure;
    // If width is not supplied in the markdown file, the default width here will override the default width on the SVG component.
    const { svg, viewBox, width = "w-full", caption } = figure;
</script>

<div class="not-prose flex flex-col items-center">
    <!-- you can apply text-color, gradient, etc. to the svg using styles/classes on this container div -->
    <div class="{width} flex flex-col items-center overflow-hidden rounded-lg">
        <!-- You need to specify width relative to the container div, so that if the SVG also specifies a width, it will be overridden. -->
        <svelte:component this={svg} {viewBox} width="100%" />
    </div>
    {#if caption}
        <div class="{width} p-2 text-base text-gray-500">
            {caption}
        </div>
    {/if}
</div>
