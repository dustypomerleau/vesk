<script lang="ts">
    import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte";
    import type { LayoutData } from "./$types";
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";

    // export let data: LayoutData;
    // console.log(data);
</script>

provider layout file - this content is always visible

<ClerkLoading let:clerk>clerk is loading</ClerkLoading>
<ClerkLoaded let:clerk
    >clerk is fully loaded
    {window.Clerk.user?.fullName}
    <slot />
</ClerkLoaded>
