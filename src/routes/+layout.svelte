<script>
    import "../app.css";
    import Footer from "$lib/Footer.svelte";
    import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/manifest.json" />
    <meta charset="utf-8" />
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

<body class="bg-logoNavy font-sans font-light text-gray-600">
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
