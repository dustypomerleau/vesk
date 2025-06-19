<script lang="ts">
    import LinkButton from "$lib/components/LinkButton.svelte";
    import type { Card } from "$lib/types";

    let { card }: { card: Card } = $props();
    const { link, points, title } = card;
</script>

<div class="card">
    <div>
        <h2 class="card-title">{title}</h2>
        <ul>
            {#each points as point}
                <li>{@html point}</li>
            {/each}
        </ul>
    </div>
    <LinkButton {link} />
</div>

<style>
    /* override card title padding from the main stylesheet */
    .card-title {
        padding-block-end: var(--space-3);
    }
</style>
