<script>
    export let name;
    export let text = "radio text";
    let value = text.toLowerCase();
</script>

<input id={value} type="radio" {name} {value} />
<label for={value} class="flex flex-row items-center">
    <div>
        <slot />
    </div>
    <div class="pl-2">{text}</div>
</label>
