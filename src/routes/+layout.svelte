<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Nav from "$lib/components/Nav.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <link
        rel="preload"
        fetchpriority="high"
        as="font"
        href="/fonts/albertvar.woff2"
        type="font/woff2"
    />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#3778bf" />
    <meta
        name="description"
        content="Vic Eye & Retina Specialists: Cataract and retinal surgeons serving greater Melbourne. Located in Ringwood, Victoria."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
</svelte:head>

<div class="outer">
    <Nav />

    <main>
        <div id="bg" class="bg">
            {@render children()}
        </div>
    </main>

    <Footer />
</div>

<style>
    .outer {
        color: var(--gray-8);
        display: flex;
        flex-direction: column;

        font-size: var(--fs-xl);
        @media (width >= 40rem) {
            font-size: var(--fs-lg);
        }

        font-weight: var(--fw-normal);
        line-height: 1.55;
        min-height: 100lvh;
    }

    .bg {
        background-attachment: fixed;
        background-image: linear-gradient(135deg, var(--gray-1), var(--gray-3));
        background-size: cover;
        display: flex;
        flex-direction: column;
    }
</style>
