<script lang="ts">
    import type { LayoutServerData } from "./$types";

    export let data: LayoutServerData;
</script>

provider layout file - this content is always visible

{#if data.user.organizationMemberships.role}
    <slot />
{/if}
