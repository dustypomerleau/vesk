<script lang="ts">
    import type { PhotoFigure } from "$lib/types";

    export let figure: PhotoFigure;
    const { image, width, alt, caption } = figure;
</script>

<div class="not-prose flex flex-col items-center gap-2">
    <picture style="width: {width}">
        <source type="image/avif" srcset="/{image}.avif" />
        <source type="image/webp" srcset="/{image}.webp" />
        <source type="image/jpeg" srcset="/{image}.jpg" />
        <img src="/{image}.jpg" {alt} class="rounded-lg" />
    </picture>
    <div style="width: {width}" class="p-1 text-base text-gray-500">
        {caption}
    </div>
</div>
