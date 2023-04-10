<script lang="ts">
    import LinkButton from "$lib/components/LinkButton.svelte";
    import type { ComponentType, SvelteComponentTyped } from "svelte";

    export let link: {
        icon: ComponentType<SvelteComponentTyped>;
        buttonText: string;
        href: string;
    };
    export let points: Array<string>;
    export let title: string;
</script>

<div class="card">
    <div>
        <h2 class="card-title">{title}</h2>
        <ul>
            {#each points as point}
                <li>{@html point}</li>
            {/each}
        </ul>
    </div>
    <LinkButton {...link} />
</div>
