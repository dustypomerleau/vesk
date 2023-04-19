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
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
    import PhotoFigure from "$lib/components/PhotoFigure.svelte";
    import SvgFigure from "$lib/components/SvgFigure.svelte";

    // pass a width if you don't want it to default to 100%
    const figure1 = {
        image: "mht",
        // width: "50%",
        alt: "mht alt",
        caption: "Figure 1: Ok so this is the deal, we have a figure and below the figure there is a caption. The idea is that the caption should explain the figure."
    }

    const figure2 = {
        svg: ParkingMap,
        // width: "50%",
        caption: "Figure 2: Ok so this is the deal, we have a figure and below the figure there is a caption. The idea is that the caption should explain the figure."
    }
</script>

The inside of your eye contains a lens that focuses light.
As we age, the lens gradually becomes less clear.
When the lens becomes yellowed or cloudy, we call it a cataract.
When a cataract is mild, it won't affect your vision much, although it may change the prescription in your glasses.
Cataracts gradually worsen with time, and eventually your vision will be blurry in a way that glasses can't correct.

<PhotoFigure figure={figure1} />

<SvgFigure figure={figure2} />

When a cataract is mild, it won't affect your vision much, although it may change the prescription in your glasses.
Cataracts gradually worsen with time, and eventually your vision will be blurry in a way that glasses can't correct
