<!-- clerkoff -->
<!-- <script lang="ts"> -->
<!--     import Access from "$lib/components/Access.svelte"; -->
<!--     import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte"; -->
<!--     import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte"; -->
<!--     import SignedIn from "clerk-sveltekit/client/SignedIn.svelte"; -->
<!---->
<!--     let { children } = $props(); -->
<!-- </script> -->
<!---->
<!-- <ClerkLoading><div class="m-6">Loading...</div></ClerkLoading> -->
<!---->
<!-- <ClerkLoaded let:clerk> -->
<!--     <SignedIn> -->
<!--         {#if clerk?.session?.checkAuthorization({ permission: "org:provider:access" })} -->
<!--             {@render children()} -->
<!--         {:else} -->
<!--             <Access /> -->
<!--         {/if} -->
<!--     </SignedIn> -->
<!-- </ClerkLoaded> -->
