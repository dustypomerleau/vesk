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
<nav class="nav-container">
    <input class="checkbox" type="checkbox" name="" id="" />
    <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
    </div>
    <div class="menu-items">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#location">Location</a></li>
            <li><a href="/#doctors">Our Doctors</a></li>
            <li><a href="/#info">Patient Information</a></li>
            <li><a href="/refer">Refer</a></li>
            <li><a href="/#contact">Contact</a></li>
        </ul>
    </div>
</nav>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--blue-10);
        padding: var(--space-4);

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

    nav {
        overflow-x: hidden;
    }

    .nav-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: stretch;

        position: absolute;
        right: 0;
        width: 100%;

        @media (width >= 40rem) {
            width: calc(var(--space-4) * 20);
        }

        .checkbox {
            position: absolute;
            display: block;
            height: 32px;
            width: 32px;
            top: 15px;
            right: 10px;
            z-index: 5;
            opacity: 0;
            cursor: pointer;
        }

        .hamburger-lines {
            display: block;
            /* this exact height is needed to make the lines cross at their middle, and needs to be adjusted if you adjust the height of .line */
            height: 24.5px;
            width: 32px;
            position: absolute;
            top: 26px;
            right: 20px;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .line {
                display: block;
                height: 2.7px;
                width: 100%;
                border-radius: 5px;
                background: var(--gray-4);
            }

            .line1 {
                transform-origin: 0% 0%;
                transition: transform 0.3s ease-in-out;
            }

            .line2 {
                transition: transform 0.1s ease-in-out;
            }

            .line3 {
                transform-origin: 0% 100%;
                transition: transform 0.3s ease-in-out;
            }
        }

        input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
            transform: rotate(45deg);
        }

        input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
            transform: scaleY(0);
        }

        input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
            transform: rotate(-45deg);
        }

        input[type="checkbox"]:checked ~ .menu-items {
            transform: translateX(0);
        }

        li {
            display: flex;
            justify-content: stretch;
            align-items: stretch;

            list-style: none;

            a {
                flex-grow: 1;

                padding-block: var(--space-2);
                color: white;
                text-decoration: none;

                &:hover {
                    font-weight: bolder;
                }
            }
        }
    }

    .menu-items {
        display: flex;
        flex-direction: column;

        margin-block-start: calc(var(--space-4) * 4.5);
        padding-block-end: var(--space-4);

        border-radius: var(--radius-sm);
        background-color: var(--blue-10);
        text-align: center;

        /* note: preventing horizontal scroll with this call to translate requires adding overflow-x: hidden to body in app.css */
        transform: translate(100vw);
        transition: transform 0.35s ease-in-out;
    }
</style>
