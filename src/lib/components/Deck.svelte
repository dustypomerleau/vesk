<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { cards } from "$lib/content/cards";
</script>

<div id="cards" class="deck">
    {#each cards as card}
        <Card {card} />
    {/each}
</div>

<style>
    .deck {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @media (width >= 48rem) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
        }
    }
</style>
