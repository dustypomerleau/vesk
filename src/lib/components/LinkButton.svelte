<script lang="ts">
    import type { ComponentType, SvelteComponentTyped } from "svelte";

    export let buttonText: string;
    export let href: string;
    export let icon: ComponentType<SvelteComponentTyped>;
</script>

<a {href} class="button flex flex-row items-center justify-center">
    <div class="text-blue-200">
        <svelte:component this={icon} />
    </div>
    <div class="pl-2">{buttonText}</div>
</a>
