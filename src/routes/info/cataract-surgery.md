---
author: Dusty Pomerleau
brief: Cataract surgery
creds: MD, FRANZCO
date: 2023-03-06
icon: Iol
image: dlp
title: A patient's guide to cataract surgery and lens implants
---

<script lang="ts">
    import Cataract from "$lib/svg/Cataract.svelte";
    import Eye from "$lib/svg/Eye.svelte";
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
    import PhotoFigure from "$lib/components/PhotoFigure.svelte";
    import SvgFigure from "$lib/components/SvgFigure.svelte";
    import type { PhotoFig, SvgFig } from "$lib/types";

    const cataract: SvgFig = {
        svg: Cataract,
        viewBox: "0, 100, 1200, 600",
        size: "large",
        caption: "Compared to a clear lens, a cataract impairs your vision in several ways: It reduces the amount of light entering your eye (poor contrast), changes the color of the image (yellowing), scatters light (glare, blur), and changes where the light is focused (myopia).",
    };

    // const mht: PhotoFig = {
    //     image: "mht",
    //     size: "large",
    //     alt: "The Haag-Streit EYESTAR 900 optical biometer",
    //     caption: "haagstreit.com",
// };
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

### this is an h3, what's it to you?
