<script>
    const links = [
        { href: "/", text: "Home" },
        { href: "/#doctors", text: "Specialists" },
        { href: "/#location", text: "Location" },
        { href: "/#contact", text: "Contact" },
        { href: "/refer", text: "Refer" }
    ];
</script>

<div
    id="footer"
    class="flex flex-col gap-6 bg-gray-300 p-8 sm:px-12 lg:flex-row lg:items-center lg:justify-center lg:gap-12"
>
    <div class="font-normal text-gray-500">
        &copy;2022 Vic&nbsp;Eye&nbsp;and&nbsp;Retina&nbsp;Specialists
        Pty&nbsp;Ltd
    </div>
    {#each links as link}
        <a href={link.href}>
            <div class="lg:text-center">
                <span
                    class="text-gray-500 shadow-footer hover:shadow-activeFooter"
                    >{link.text}</span
                >
            </div>
        </a>
    {/each}
</div>
