<script lang="ts">
    const currYear = new Date().getFullYear();

    const links = [
        { href: "/", text: "Home" },
        { href: "/#doctors", text: "Specialists" },
        { href: "/#location", text: "Location" },
        { href: "/#contact", text: "Contact" },
        { href: "/refer", text: "Refer" },
    ];
</script>

<div id="footer" class="footer">
    <div class="copy">
        &copy;2022&ndash;{currYear} Vic&nbsp;Eye&nbsp;and&nbsp;Retina&nbsp;Specialists Pty&nbsp;Ltd
    </div>
    <div class="link-grid">
        {#each links as link}
            <a href={link.href} class="link">
                <div>
                    <span>{link.text}</span>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    .copy {
        color: var(--gray-8);
        font-weight: var(--fw-normal);
    }

    .footer {
        color: var(--gray-8);
        background-color: var(--gray-4);
        margin-block-start: auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        padding-inline: var(--space-6);
        padding-block: var(--space-4);

        @media (width >= 40rem) {
            justify-content: center;
            align-items: center;

            padding-inline: calc(var(--space-4) * 3);
        }

        @media (width >= 64rem) {
            flex-direction: row;
            gap: calc(var(--space-4) * 3);
        }

        .link {
            color: currentColor;
            text-decoration-color: #4b556370;

            :focus,
            :hover {
                text-decoration-thickness: 3px;
            }
        }
    }

    .link-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;
        gap: var(--space-3);

        @media (width >= 40rem) {
            display: flex;
            justify-content: center;
            gap: var(--space-6);
        }
    }
</style>
