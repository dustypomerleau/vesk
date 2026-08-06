<script lang="ts">
    import type { PostContent } from "$lib/types";

    let { data } = $props();

    const {
        meta: { title, brief, date },
        Content,
    }: PostContent = data;

    const localDate = new Date(date).toLocaleDateString();
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | {brief}</title>
</svelte:head>

<div class="article-container">
    <article>
        <h1>{title}</h1>
        <div class="date">{localDate}</div>
        <div class="divider"></div>
        <div class="content"><Content /></div>
    </article>
</div>

<style>
    .article-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: white;
        font-size: var(--fs-xl);
        padding-block-end: var(--space-4);

        @media (width >= 40rem) {
            padding-inline: var(--space-4);
        }
    }
</style>
