<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

provider layout file - this content is always visible

{#if data.user.organizationMemberships.role}{/if}

<div>{user}</div>
<div>{data.clerk.user}</div>
<slot />
