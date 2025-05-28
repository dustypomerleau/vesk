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
<label for={value}>
    <Icon width={iconWidth} />
    <div class="nudge">{text}</div>
</label>

<style>
    .nudge {
        padding-inline-start: var(--space-2);
    }
</style>
