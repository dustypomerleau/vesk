<script>
    import Card from "$lib/Card.svelte";
    import { cards } from "$lib/cards";
</script>

<div
    id="cards"
    class="flex flex-col md:flex-row md:flex-wrap items-center md:items-stretch justify-start md:justify-center"
>
    {#each cards as card}
        <Card {...card} />
    {/each}
</div>
