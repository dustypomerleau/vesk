<!-- 24 px = 1.5 rem -->
<!-- the key is setting the viewbox to 24 because that's the number of pixels the svg is designed to be displayed at based on stroke width etc. -->
<!-- now you just need to extract the width as a variable: string and set it to whatever rem/percentage value you want -->
<!-- if you create an svg diagram, rather than an icon, the viewbox size will be larger -->
<!-- have a look at the viewbox on your maps for reference -->
<!-- todo: go through and set up all your svg this way -->
<!-- todo: set your default widths at the time of calling <svelte:component> up 1 level, which makes these SVGs more reusable -->

<!-- plan: move viewbox and width to be the first attributes on every SVG first, while adding script with the width prop, then go back to components and handle sizing in rem, then run routes -->
<script lang="ts">
    export let width: string;
</script>

<svg viewBox="0 0 24 24" {width} xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12c0 1-1.75 6.25-7.25 6.25S4.75 13 4.75 12 6.5 5.75 12 5.75 19.25 11 19.25 12z"/><circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>
