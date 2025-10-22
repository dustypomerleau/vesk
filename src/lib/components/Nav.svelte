<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import { Navbar, NavHamburger, NavLi, NavUl } from "./navbar";
</script>

<!-- todo: hunt down and clean up any tailwind remaining from flowbite, and then remove any JS that only adds those styles. -->
<header id="header" class="header">
    <Navbar>
        <a href="/" title="Vic Eye Home">
            <div class="logo">
                <Logo />
            </div>
        </a>
        <NavHamburger />
        <NavUl>
            <NavLi href="/#location">Location</NavLi>
            <NavLi href="/#doctors">Doctors</NavLi>
            <NavLi href="/#info">Patient information</NavLi>
            <NavLi href="/#contact">Contact</NavLi>
            <NavLi href="/refer">Refer</NavLi>
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
