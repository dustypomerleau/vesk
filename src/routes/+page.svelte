<script>
    import Contact from "$lib/Contact.svelte";
    import Deck from "$lib/Deck.svelte";
    import Docs from "$lib/Docs.svelte";
    import Hero from "$lib/Hero.svelte";
    import Maps from "$lib/Maps.svelte";
</script>

<svelte:head>
    <link
        rel="preload"
        fetchpriority="high"
        as="image"
        href="/images/hero.webp"
        type="image/webp"
    />
</svelte:head>

<Hero />
<Deck />
<Docs />
<Maps />
<Contact />
