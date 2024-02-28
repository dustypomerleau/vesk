<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import UserButton from "clerk-sveltekit/client/UserButton.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
</script>

<header
    id="header"
    class="flex flex-row flex-wrap items-center justify-between bg-blue-10 px-4 py-4 sm:px-8"
>
    <a href="/" title="Vic Eye Home">
        <div>
            <Logo />
        </div>
    </a>
    <div>
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
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
