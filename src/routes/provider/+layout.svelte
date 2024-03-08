<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
    console.log(data);
</script>

provider layout file - this content is always visible
{data.isProvider}
{data.isProviderRole}

{#if data.isProvider}
    <slot />
{/if}
