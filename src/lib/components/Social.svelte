<script lang="ts">
    import Facebook from "$lib/svg/Facebook.svelte";
    import Instagram from "$lib/svg/Instagram.svelte";
    import LinkedIn from "$lib/svg/LinkedIn.svelte";
</script>

<div class="social">
    <a href="https://www.instagram.com/viceyeretina/"
        ><div class="social-item"><Instagram /></div></a
    >

    <a href="https://www.linkedin.com/company/vic-eye-retina-specialists/"
        ><div class="social-item"><LinkedIn /></div></a
    >

    <a href="https://www.facebook.com/profile.php?id=61580675017112"
        ><div class="social-item"><Facebook /></div></a
    >
</div>

<style>
    .social {
        display: flex;
        align-items: center;
        gap: var(--space-4);

        padding-inline-start: var(--space-6);
        padding-inline-end: var(--space-8);
        padding-block-start: var(--space-6);
        padding-block-end: var(--space);

        @media (width >= 53rem) {
            padding-inline: var(--space-4);
            padding-block: 0;
        }
    }

    .social-item {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 36px;
        height: 36px;
        border-radius: var(--radius-sm);

        &:hover {
            background-color: color-mix(in oklab, var(--blue-10) 80%, white);
        }
    }
</style>
