<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import OrganizationSwitcher from "clerk-sveltekit/client/OrganizationSwitcher.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
    import UserButton from "clerk-sveltekit/client/UserButton.svelte";
</script>

<header id="header" class="flex flex-row items-center justify-between bg-blue-10 px-4 py-4 sm:px-8">
    <a href="/" title="Vic Eye Home">
        <div>
            <Logo />
        </div>
    </a>
    <div>
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <!-- todo: how best to get the user into the correct organization, can we default to viceye rather than personal? Can we make viceye the only option? -->
            <OrganizationSwitcher />
        </SignedIn>
        <SignedOut>
            <div class="flex flex-col justify-center pl-2 pt-3 sm:pt-0">
                <a href="/login" class="text-gray-4 underline hover:text-gray-3 hover:decoration-2"
                    >Provider login</a
                >
            </div>
        </SignedOut>
    </div>
</header>
