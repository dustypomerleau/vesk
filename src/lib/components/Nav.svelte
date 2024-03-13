<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import OrganizationSwitcher from "clerk-sveltekit/client/OrganizationSwitcher.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
    import UserButton from "clerk-sveltekit/client/UserButton.svelte";
</script>

<header
    id="header"
    class="flex flex-row flex-wrap items-center justify-between gap-y-8 bg-blue-10 px-4 py-4 sm:px-8"
>
    <a href="/" title="Vic Eye Home">
        <div>
            <Logo />
        </div>
    </a>

    <SignedIn>
        <div class="flex flex-wrap items-center gap-4 pl-1">
            <!-- todo: how best to get the user into the correct organization, can we default to viceye rather than personal? Can we make viceye the only option? -->
            <div><OrganizationSwitcher /></div>
            <div><UserButton afterSignOutUrl="/" /></div>
        </div>
    </SignedIn>

    <SignedOut>
        <div>
            <a href="/login" class="text-gray-4 underline hover:text-gray-3 hover:decoration-2"
                >Provider login</a
            >
        </div>
    </SignedOut>
</header>
