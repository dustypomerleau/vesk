<script lang="ts">
    import type { RadioProps } from "$lib/types";

    let { Icon, name, text = "radio text", iconWidth = "1.5rem" }: RadioProps = $props();
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
