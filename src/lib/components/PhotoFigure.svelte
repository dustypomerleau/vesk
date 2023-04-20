<script lang="ts">
    import { getFigureBreakpointWidth } from "$lib/utils";
    import type { PhotoFigure } from "$lib/types";

    export let figure: PhotoFigure;
    const { image, size, alt, caption } = figure;
    const smallBreakpointWidth = size ? getFigureBreakpointWidth(size) : "";
</script>

<div class="not-prose flex flex-col items-center gap-2">
    <picture class="w-full {smallBreakpointWidth}">
        <source type="image/avif" srcset="/{image}.avif" />
        <source type="image/webp" srcset="/{image}.webp" />
        <source type="image/jpeg" srcset="/{image}.jpg" />
        <!-- ...but rounded needs to go on the img -->
        <img src="/{image}.jpg" {alt} class="rounded-lg" />
    </picture>
    {#if caption}
        <div class="w-full {smallBreakpointWidth} px-2 text-base text-gray-500">
            {caption}
        </div>
    {/if}
</div>
