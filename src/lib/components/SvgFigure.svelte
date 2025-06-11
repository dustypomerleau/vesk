<!-- todo: create a FigStack so that you can wrap sequential figs or lay out horizontally depending on the screen -->

<script lang="ts">
    import type { SvgFig } from "$lib/types";

    let { figure }: { figure: SvgFig } = $props();
    const { caption, size, Svg, viewBox, width = "100%" } = figure;
</script>

<div class="figure figure-size {size}">
    <!-- you can apply text-color, gradient, etc. to the svg using styles/classes on this container div -->
    <div class="svg-container">
        <!-- You need to specify width relative to the container div, so that if the SVG also specifies a width, it will be overridden. -->
        <Svg {viewBox} {width} />
    </div>
    {#if caption}
        <div class="figure-caption">
            {caption}
        </div>
    {/if}
</div>

<style>
    .svg-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: var(--radius-lg);
        overflow: hidden;
        width: 100%;
    }
</style>
