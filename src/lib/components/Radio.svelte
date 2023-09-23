<script lang="ts">
    import type { ComponentType, SvelteComponent } from "svelte";

    export let icon: ComponentType<SvelteComponent>;
    export let iconWidth = "1.5rem";
    export let name: string;
    export let text = "radio text";
    let value = text.toLowerCase();
</script>

<input id={value} type="radio" {name} {value} />
<label for={value} class="flex flex-row items-center">
    <div>
        <svelte:component this={icon} width={iconWidth} />
    </div>
    <div class:pl-2={icon}>{text}</div>
</label>
