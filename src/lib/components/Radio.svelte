<script lang="ts">
    import type { Component } from "svelte";

    let {
        Icon,
        name,
        text = "radio text",
        iconWidth = "1.5rem",
    }: {
        Icon: Component;
        name: string;
        text?: string;
        iconWidth?: string;
    } = $props();

    let value = text.toLowerCase();
</script>

<input id={value} type="radio" {name} {value} />
<label for={value} class="flex flex-row items-center">
    <div>
        <Icon width={iconWidth} />
    </div>
    <div class:pl-2={Icon}>{text}</div>
</label>
