<script>
    export let buttonText;
    export let href;
    export let icon;
</script>

<a {href} class="button flex flex-row items-center justify-center">
    <div class="text-blue-200">
        <svelte:component this={icon} />
    </div>
    <div class="pl-2">{buttonText}</div>
</a>
