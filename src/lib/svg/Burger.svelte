<script lang="ts">
    let { name = "menu", viewBox = "0 0.6 24 24", width = "1.5rem" } = $props();
</script>

<svg {name} {viewBox} style="width: {width};"  xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75h14.5m-14.5 12.5h14.5M4.75 12h14.5"/></svg>
