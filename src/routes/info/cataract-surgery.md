---
author: Dusty Pomerleau
brief: Cataract surgery
creds: MD, FRANZCO
date: 2023-03-06
icon: Iol
image: dlp
title: A patient's guide to cataract surgery and lens implants
---

<script>
    import Eye from "$lib/svg/Eye.svelte";
    import Figure from "$lib/components/Figure.svelte";
    import SvgFigure from "$lib/components/SvgFigure.svelte";

    const figure1 = { image: "mht", alt: "mht alt", caption: "my caption" }
    const figure2 = { svg: Eye, caption: "SVG caption" }
</script>

The inside of your eye contains a lens that focuses light.
As we age, the lens gradually becomes less clear.
When the lens becomes yellowed or cloudy, we call it a cataract.
When a cataract is mild, it won't affect your vision much, although it may change the prescription in your glasses.
Cataracts gradually worsen with time, and eventually your vision will be blurry in a way that glasses can't correct.

<Figure figure={figure1} />

<SvgFigure figure={figure2} />
