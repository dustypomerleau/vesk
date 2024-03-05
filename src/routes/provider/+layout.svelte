<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

provider layout file - this content is always visible
{data.isProvider}
{data.isProviderRole}

{#if data.isProvider}
    <slot />
{/if}
