<script lang="ts">
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Nav from "$lib/components/Nav.svelte";

    export const prerender = true;
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
    <link rel="mask-icon" href="/mask-icon.svg" color="#3878c3" />
    <meta
        name="description"
        content="Vic Eye & Retina Specialists: Cataract and retinal surgeons serving greater Melbourne. Located in Ringwood, Victoria."
    />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Vic Eye Specialist Surgeons</title>
</svelte:head>

<body
    class="flex min-h-screen flex-col bg-blue-900 font-sans text-lg font-normal leading-[1.55] text-gray-600"
>
    <Nav />

    <main>
        <div
            id="bg"
            class="flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 bg-cover bg-fixed"
        >
            <slot />
        </div>
    </main>

    <Footer />
</body>
