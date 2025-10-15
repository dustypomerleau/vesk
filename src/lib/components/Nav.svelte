<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import { Navbar, NavHamburger, NavLi, NavUl } from "./navbar";

    let open = $state(false);
</script>

<header id="header" class="header">
    <Navbar>
        <a href="/" title="Vic Eye Home">
            <div class="logo">
                <Logo />
            </div>
        </a>
        <NavHamburger />
        <NavUl>
            <NavLi href="/">Home</NavLi>
            <NavLi href="/#location">Location</NavLi>
            <NavLi href="/#doctors">Doctors</NavLi>
            <NavLi href="/#info">Patient information</NavLi>
            <NavLi href="/#contact">Contact</NavLi>
        </NavUl>
    </Navbar>
</header>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        width: 100%;
        background-color: var(--blue-10);
        padding: var(--space-4);

        /* @media (width >= 40rem) { */
        /*     padding-inline: var(--space-8); */
        /* } */
    }

    .logo {
        display: flex;
        flex-direction: column;

        width: calc(var(--space-4) * 10);

        @media (width >= 40rem) {
            width: calc(var(--space-4) * 15);
        }
    }
</style>
