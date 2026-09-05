<script lang="ts">
    import Deck from "$lib/components/Deck.svelte";
    import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
    <link
        rel="preload"
        fetchpriority="high"
        as="image"
        href="/images/hero.webp"
        type="image/webp"
    />
    <title>Vic Eye &amp; Retina Specialists</title>
</svelte:head>

<Hero />
<Deck />
