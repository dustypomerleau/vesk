<script context="module" lang="ts">
    import { writable } from "svelte/store";

    const open_store = writable(false);
</script>

<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { mounted, click_outside, focus_outside, trap } from "$lib/menu";
    import { tick } from "svelte";

    export let open: boolean;

    $: $open_store = open;

    let menu_button: HTMLButtonElement;

    function close() {
        open = false;
        $open_store = open;
    }

    afterNavigate(close);
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "Escape") {
            close();
            // we only manage focus when Esc is hit
            // otherwise, the navigation will reset focus
            tick().then(() => menu_button.focus());
        }
    }}
/>

<div></div>
