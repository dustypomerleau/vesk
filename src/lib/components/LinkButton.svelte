<script lang="ts">
    import type { Link } from "$lib/types";

    let { link, iconWidth = "1.5rem" }: { link: Link; iconWidth?: string } = $props();
    const { buttonText, href, icon } = link;
</script>

<a {href} class="button flex flex-row items-center justify-center">
    <div class="text-blue-3">
        <svelte:component this={icon} width={iconWidth} />
    </div>
    <div class="pl-2">{buttonText}</div>
</a>
