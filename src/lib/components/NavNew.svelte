<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import type { Page } from "@sveltejs/kit";
    import type { Readable } from "svelte/store";

    export let page: Readable<Page<Record<string, string>, string>>;
    let nav: HTMLElement;
    let open = false;
    let visible = true;

    // hide nav when we navigate
    page.subscribe(() => {
        open = false;
    });

    let last_scroll = 0;
    function handle_scroll() {
        const scroll = window.pageYOffset;
        visible = scroll < 50 || scroll < last_scroll;
        last_scroll = scroll;
    }

    function handle_focus() {
        if (open && !nav.contains(document.activeElement)) {
            open = false;
        }
    }
</script>

<svelte:window on:focusin={handle_focus} on:scroll={handle_scroll} />

{#if open}
    <div class="bg-orange-4" on:click={() => (open = false)} />
{/if}

<header id="header" class="flex flex-col items-center justify-between bg-blue-10 md:flex-row">
    <nav class:visible={visible || open} class:open bind:this={nav} aria-label="Primary">
        <a href="/" title="Vic Eye Home">
            <div class="px-8 py-4">
                <Logo />
            </div>
        </a>
        toggle menu button, burger icon inside the button
    </nav>
</header>
