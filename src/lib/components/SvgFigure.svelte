<script lang="ts">
    import type { SvgFigure } from "$lib/types";

    export let figure: SvgFigure;
    // If width is not supplied in the markdown file, the default width here will override the default width on the SVG component.
    const { svg, viewBox, width = "100%", caption } = figure;
</script>

<div class="not-prose flex flex-col items-center overflow-hidden">
    <svelte:component this={svg} {viewBox} {width} />
    <div>{caption}</div>
</div>
