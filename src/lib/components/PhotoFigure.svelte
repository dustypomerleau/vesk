<script lang="ts">
    import { getFigureBreakpointWidth } from "$lib/utils";
    import type { PhotoFigure } from "$lib/types";

    export let figure: PhotoFigure;
    const { image, size, alt, caption } = figure;
    const smallBreakpointWidth = size ? getFigureBreakpointWidth(size) : "";
</script>

<div class="not-prose flex flex-col items-center gap-2">
    <!-- widths need to go on the <picture> because it acts as a container -->
    <!-- rounded goes directly on the image or alternatively, you can put it on the <picture> and use overflow-hidden -->
    <picture class="w-full {smallBreakpointWidth}">
        <source type="image/avif" srcset="/{image}.avif" />
        <source type="image/webp" srcset="/{image}.webp" />
        <source type="image/jpeg" srcset="/{image}.jpg" />
        <img src="/{image}.jpg" {alt} class="rounded-lg" />
    </picture>
    {#if caption}
        <div class="w-full {smallBreakpointWidth} px-2 text-base text-gray-7">
            {caption}
        </div>
    {/if}
</div>
