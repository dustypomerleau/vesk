<script lang="ts">
    import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte";
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
</script>

<div class="my-6 text-3xl">provider/+layout.svelte (always visible)</div>

<ClerkLoading>Clerk is loading...</ClerkLoading>

<ClerkLoaded let:clerk>
    <div class="mb-3">Clerk is fully loaded</div>
    <div class="my-3">
        The current organization is {clerk?.organization?.name ||
            "oops, there's no organization selected"}
    </div>

    <SignedIn let:user
        >The signed in user is {user?.fullName}

        {#if clerk?.session?.checkAuthorization({ permission: "org:provider:access" })}
            <slot />
        {:else}
            <div class="my-6 text-3xl">
                You don't have permission to view the content for the selected organization.
            </div>
        {/if}
    </SignedIn>
</ClerkLoaded>
