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

<div class="flex justify-center bg-white">
    <article class="prose-a:link prose m-6">
        <h1 class="mb-0 pb-4 text-gray-8">{title}</h1>
        <div class="not-prose"><Byline {meta} /></div>
        <div class="mt-6 h-[2px] bg-gradient-to-r from-gray-4 to-gray-2">
            <div class="text-lg"><Content /></div>
        </div>
    </article>
</div>
