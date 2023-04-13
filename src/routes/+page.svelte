<script lang="ts">
    import Contact from "$lib/components/Contact.svelte";
    import Deck from "$lib/components/Deck.svelte";
    import Docs from "$lib/components/Docs.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Info from "$lib/components/Info.svelte";
    import Maps from "$lib/components/Maps.svelte";

    export let data;
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
<Docs />
<Maps />
<Info {data} />
<Contact />
