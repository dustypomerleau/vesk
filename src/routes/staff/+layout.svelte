<script lang="ts">
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
    import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
</script>

<ClerkLoading><div class="m-6">Loading...</div></ClerkLoading>

<ClerkLoaded let:clerk>
    <SignedIn>
        {#if clerk?.session?.checkAuthorization({ permission: "org:staff:access" })}
            <slot />
        {:else}
            <div class="m-6 text-3xl">Access to this page is restricted to VERS staff.</div>
        {/if}
    </SignedIn>
</ClerkLoaded>
