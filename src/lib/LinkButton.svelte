<script>
    export let buttonText;
    export let href;
</script>

<a {href} class="button flex flex-row justify-center items-center">
    <div class="text-blue-200"><slot name="icon" /></div>
    <div class="pl-2">{buttonText}</div>
</a>
