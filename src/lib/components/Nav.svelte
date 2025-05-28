<!-- clerkoff -->
<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    // import OrganizationSwitcher from "clerk-sveltekit/client/OrganizationSwitcher.svelte";
    // import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    // import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
    // import UserButton from "clerk-sveltekit/client/UserButton.svelte";
</script>

<header id="header" class="header">
    <a href="/" title="Vic Eye Home">
        <div class="logo">
            <Logo />
        </div>
    </a>

    <!-- <SignedIn> -->
    <!--     <div class="flex flex-wrap items-center gap-4 pl-1"> -->
    <!-- todo: how best to get the user into the correct organization, can we default to viceye rather than personal? Can we make viceye the only option? -->
    <!--         <div><OrganizationSwitcher /></div> -->
    <!--         <div><UserButton afterSignOutUrl="/" /></div> -->
    <!--     </div> -->
    <!-- </SignedIn> -->
    <!---->
    <!-- <SignedOut> -->
    <!--     <div> -->
    <!--         <a href="/login" class="text-gray-4 underline hover:text-gray-3 hover:decoration-2" -->
    <!--             >Provider login</a -->
    <!--         > -->
    <!--     </div> -->
    <!-- </SignedOut> -->
</header>

<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        background-color: var(--blue-10);
        column-gap: var(--space-8);
        padding-block: var(--space-4);
        padding-inline: var(--space-4);

        @media (width >= 40rem) {
            padding-inline: var(--space-8);
        }
    }

    .logo {
        display: flex;
        flex-direction: column;

        width: calc(var(--space-4) * 12);

        @media (width >= 40rem) {
            width: calc(var(--space-4) * 15);
        }
    }
</style>
