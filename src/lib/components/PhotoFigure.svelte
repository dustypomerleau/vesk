<script lang="ts">
    import { getFigureBreakpointWidth } from "$lib/utils";
    import type { PhotoFig } from "$lib/types";

    let { figure }: { figure: PhotoFig } = $props();
    // at present, these text size/color customizations are not playing nicely with mdsvex, so basically whatever is the default here will be used, regardless of what you specify in the markdown file
    // at present, we are not using the width prop on PhotoFigure, even though it exists on all descendents of type Figure (see SvgFigure for an example)
    const { image, size, alt, caption, textSize = "text-base", textColor = "text-gray-7" } = figure;
    const smallBreakpointWidth = size ? getFigureBreakpointWidth(size) : "";
</script>

<div class="not-prose flex flex-col items-center gap-2">
    <!-- rounded goes directly on the image or alternatively, you can put it on the <picture> and use overflow-hidden -->
    <picture class="flex place-content-center">
        <source type="image/avif" srcset="/{image}.avif" />
        <source type="image/webp" srcset="/{image}.webp" />
        <img src="/{image}.webp" {alt} class="w-full {smallBreakpointWidth} rounded-lg" />
    </picture>
    {#if caption}
        <div class="w-full {smallBreakpointWidth} px-2 {textSize} {textColor}">
            <!-- todo: split caption into 2 props, so you can style the caption header/lede text  -->
            {caption}
        </div>
    {/if}
</div>
