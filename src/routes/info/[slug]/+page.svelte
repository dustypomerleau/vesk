<script lang="ts">
    import Byline from "$lib/components/Byline.svelte";
    import type { PostContent } from "$lib/types";

    let { meta, Content }: PostContent = $props();
    let { brief, title } = meta;
    // console.log(data);
    // {
    //   meta: {
    //     author: 'Dusty Pomerleau',
    //     brief: 'Cataract surgery',
    //     creds: 'MD, FRANZCO',
    //     date: '2023-09-24T00:00:00.000Z',
    //     icon: 'Iol',
    //     image: 'dlp',
    //     title: "A patient's guide to cataract surgery and lens implants"
    //   },
    //   Content: [Function: Cataract_surgery_md] {
    //     filename: '.../routes/info/cataract-surgery.md',
    //     render: [Function (anonymous)]
    //   }
    // }
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | {brief}</title>
</svelte:head>

<div class="article-container">
    <!-- todo: the article tag previously had tailwind prose class and may need to be tweaked -->
    <!-- conversely, the div wrapping Byline had to be marked not prose, so really only the content div needs tweaking -->
    <article>
        <h1>{title}</h1>
        <div><Byline {meta} /></div>
        <div class="divider"></div>
        <div class="content"><Content /></div>
    </article>
</div>

<style>
    .article-container {
        display: flex;
        justify-content: center;

        background-color: white;
    }
</style>
