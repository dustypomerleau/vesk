<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { cards } from "$lib/content/cards";
</script>

<div
    id="cards"
    class="flex flex-col items-center justify-start md:flex-row md:flex-wrap md:items-stretch md:justify-center"
>
    {#each cards as card}
        <Card {...card} />
    {/each}
</div>
