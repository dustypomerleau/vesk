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

<div
    id="footer"
    class="mt-auto flex flex-col gap-3 bg-gray-4 px-6 py-4 sm:items-center sm:justify-center sm:px-12 lg:flex-row lg:gap-12"
>
    <div class="font-normal text-gray-8">
        &copy;2022&ndash;{currYear} Vic&nbsp;Eye&nbsp;and&nbsp;Retina&nbsp;Specialists Pty&nbsp;Ltd
    </div>
    <div
        class="grid grid-cols-2 items-center gap-3 sm:flex sm:grid-cols-none sm:flex-row sm:justify-center sm:gap-6"
    >
        {#each links as link}
            <a href={link.href}>
                <div class="lg:text-center">
                    <span class="text-gray-8 shadow-footer hover:shadow-activeFooter"
                        >{link.text}</span
                    >
                </div>
            </a>
        {/each}
    </div>
</div>
