<script>
    export let icon;
    export let name;
    export let text = "radio text";
    let value = text.toLowerCase();
</script>

<input id={value} type="radio" {name} {value} />
<label for={value} class="flex flex-row items-center">
    <div>
        <svelte:component this={icon} />
    </div>
    <div class:pl-2={icon}>{text}</div>
</label>
