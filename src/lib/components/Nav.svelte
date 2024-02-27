<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import UserButton from "clerk-sveltekit/client/UserButton.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
</script>

<header id="header" class="flex flex-col items-center justify-between bg-blue-10 md:flex-row">
    <a href="/" title="Vic Eye Home">
        <div class="px-8 py-4">
            <Logo />
        </div>
    </a>
    <div class="px-8 py-2 md:py-4">
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
            <a href="/login" class="text-gray-4 underline hover:text-gray-3 hover:decoration-2"
                >Provider login</a
            >
        </SignedOut>
    </div>
</header>
