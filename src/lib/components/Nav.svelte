<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
</script>

<header id="header" class="header">
    <a href="/" title="Vic Eye Home">
        <div class="logo">
            <Logo />
        </div>
    </a>
</header>

<style>
    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        background-color: var(--blue-10);
        column-gap: var(--space-8);
        padding-block: var(--space-4);
        padding-inline: var(--space-4);

        @media (width >= 40rem) {
            padding-inline: var(--space-8);
        }
    }

    .logo {
        display: flex;
        flex-direction: column;

        width: calc(var(--space-4) * 12);

        @media (width >= 40rem) {
            width: calc(var(--space-4) * 15);
        }
    }
</style>
