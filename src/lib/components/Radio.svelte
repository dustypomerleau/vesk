<script lang="ts">
    import type { Component } from "svelte";

    let {
        icon,
        name,
        text = "radio text",
        iconWidth = "1.5rem",
    }: {
        icon: Component;
        name: string;
        text?: string;
        iconWidth?: string;
    } = $props();

    let value = text.toLowerCase();
</script>

<input id={value} type="radio" {name} {value} />
<label for={value} class="flex flex-row items-center">
    <div>
        <svelte:component this={icon} width={iconWidth} />
    </div>
    <div class:pl-2={icon}>{text}</div>
</label>
