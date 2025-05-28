<script lang="ts">
    import type { PhotoFig } from "$lib/types";

    let { figure }: { figure: PhotoFig } = $props();
    const { alt, caption, image, size } = figure;
</script>

<!-- for reference, the tailwind styles before migration used `not-prose` -->
<!-- <div class="not-prose flex flex-col items-center gap-2"> -->
<!-- this may need tweaking and new prose styles -->
<div class="figure">
    <!-- rounded goes directly on the image or alternatively, you can put it on the <picture> and use overflow: hidden -->
    <picture class="figure-picture">
        <source type="image/avif" srcset="/{image}.avif" />
        <source type="image/webp" srcset="/{image}.webp" />
        <img src="/{image}.webp" {alt} class="figure-image figure-size {size}" />
    </picture>
    {#if caption}
        <div class="figure-caption">
            <!-- todo: split caption into 2 props, so you can style the caption header/lede text  -->
            {caption}
        </div>
    {/if}
</div>
