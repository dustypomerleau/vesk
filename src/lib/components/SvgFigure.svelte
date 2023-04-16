<script lang="ts">
    import type { SvgFigure } from "$lib/types";

    export let figure: SvgFigure;
    const { svg, caption } = figure;
</script>

<div class="not-prose flex flex-col items-center overflow-hidden">
    <svelte:component this={svg} />
    <div>{caption}</div>
</div>
