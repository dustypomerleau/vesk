<script>
    import Card from "$lib/Card.svelte";
    import { cards } from "$lib/cards";
</script>

<div
    id="cards"
    class="flex flex-col items-center justify-start md:flex-row md:flex-wrap md:items-stretch md:justify-center"
>
    {#each cards as card}
        <Card {...card} />
    {/each}
</div>
