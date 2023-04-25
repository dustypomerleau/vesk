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
    import Cataract from "$lib/svg/Cataract.svelte";
    import Eye from "$lib/svg/Eye.svelte";
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
    import PhotoFigure from "$lib/components/PhotoFigure.svelte";
    import SvgFigure from "$lib/components/SvgFigure.svelte";

    const figure1 = {
        image: "mht",
        size: "small",
        alt: "mht alt",
        caption: "Figure 1: Ok so this is the deal, we have a figure and below the figure there is a caption. The idea is that the caption should explain the figure."
    }

    const cataract = {
        svg: Cataract,
        viewBox: "0, 200, 2500, 1267",
        size: "medium",
        caption: "This is a caption under the cataract figure."
    }
</script>

The inside of your eye contains a lens that focuses light.
As we age, the lens gradually becomes less clear.
When the lens becomes yellowed or cloudy, we call it a cataract.
A mild cataract won't affect your vision much, but it may gradually change the prescription in your glasses.
Cataracts usually increase over time, and eventually your vision will be blurry in a way that glasses can't correct.
Difficulty reading and bothersome glare&mdash;particularly when driving at night&mdash;are common complaints.

<SvgFigure figure={cataract} />

When a cataract is mild, it won't affect your vision much, although it may change the prescription in your glasses.
Cataracts gradually worsen with time, and eventually your vision will be blurry in a way that glasses can't correct
