<script>
    import '../styles/styles.css';
    import Footer from '$lib/Footer.svelte';
    import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
    <link rel="icon" href="favicon.svg" />
    <link rel="mask-icon" color="#f97316" href="mask-icon.svg" />
    <meta charset="utf-8" />
    <meta name="description" content="VicEye & Retina Specialists: Cataract and retinal surgeons serving greater Melbourne. Located in Ringwood, Victoria.">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>VicEye Specialist Surgeons</title>
</svelte:head>

<div class="bg-blue-400">sample div</div>

<Nav />

<main>
    <slot />
</main>

<Footer />
