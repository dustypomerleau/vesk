<script>
    export let buttonText;
    export let href;
    export let icon;
</script>

<a {href} class="button flex flex-row justify-center items-center">
    <div class="text-sky-200">
        <svelte:component this={icon} />
    </div>
    <div class="pl-2">{buttonText}</div>
</a>
