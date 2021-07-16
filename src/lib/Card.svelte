<script>
    export let buttonText;
    export let href;
    export let points;
    export let title;
    import LinkButton from "$lib/LinkButton.svelte";
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
    <LinkButton {href} {buttonText} />
</div>
