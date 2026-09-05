<script lang="ts">
    import Logo from "$lib/svg/Logo.svelte";
    import { Navbar, NavHamburger, NavLi, NavUl } from "./navbar";
    import Social from "./Social.svelte";
</script>

<!-- todo: hunt down and clean up any tailwind remaining from flowbite, and then remove any JS that only adds those styles. -->
<!-- then merge any types you need from the flowbite types doc into your own and delete the rest -->
<!-- todo: fix styles to display links and hide burger on desktop -->
<header id="header" class="header">
    <Navbar>
        <a href="/" title="Vic Eye Home">
            <div class="logo">
                <Logo />
            </div>
        </a>
        <NavHamburger />
        <NavUl>
            <div class="links">
                <NavLi href="/location">Location</NavLi>
                <NavLi href="/doctors">Doctors</NavLi>
                <NavLi href="/info">Patient information</NavLi>
                <NavLi href="/contact">Contact</NavLi>
                <NavLi href="/refer">Refer</NavLi>
            </div>
            <Social />
        </NavUl>
    </Navbar>
</header>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        /* keep the nav on top */
        z-index: 1;
        width: 100%;
        background-color: var(--blue-10);
        padding: var(--space-4);
    }

    .links {
        display: flex;
        flex-direction: column;

        font-size: var(--fs-xl);

        @media (width >= 53rem) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;

            font-size: var(--fs-lg);
        }
    }

    .logo {
        display: flex;
        flex-direction: column;

        width: calc(var(--space-4) * 10);

        @media (width >= 53rem) {
            width: calc(var(--space-4) * 12);
        }
    }
</style>
