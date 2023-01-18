<script>
    import Contact from "$lib/components/Contact.svelte";
    import Deck from "$lib/components/Deck.svelte";
    import Docs from "$lib/components/Docs.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Maps from "$lib/components/Maps.svelte";
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
