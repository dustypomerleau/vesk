<script lang="ts">
    import type { SvgFigure } from "$lib/types";

    export let figure: SvgFigure;
    // If width is not supplied in the markdown file, the default width here will override the default width on the SVG component.
    const { svg, viewBox, width = "100%", caption } = figure;
</script>

<!-- todo: rounded corners to match PhotoFigure -->
<div class="not-prose flex flex-col items-center">
    <!-- you can apply text-color, gradient, etc. to the svg on this container div -->
    <div
        style="width: {width}"
        class="flex flex-col items-center overflow-hidden rounded-lg"
    >
        <!-- 100% of the container div -->
        <svelte:component this={svg} {viewBox} width="100%" />
    </div>
    {#if caption}
        <div style="width: {width}" class="p-1 text-base text-gray-500">
            {caption}
        </div>
    {/if}
</div>
