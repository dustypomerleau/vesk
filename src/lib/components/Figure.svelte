<script lang="ts">
    import type { Figure } from "$lib/types";

    export let figure: Figure;
    const { image, alt, caption } = figure;
</script>

<div class="not-prose flex flex-col items-center overflow-hidden">
    <picture>
        <source type="image/avif" srcset="/{image}.avif" />
        <source type="image/webp" srcset="/{image}.webp" />
        <source type="image/jpeg" srcset="/{image}.jpg" />
        <img src="/{image}.jpg" {alt} class="w-full rounded-lg object-cover" />
    </picture>
    <div>{caption}</div>
</div>
