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
When a cataract is mild, it won't affect your vision much, although it may change the prescription in your glasses.
Cataracts gradually worsen with time, and eventually your vision will be blurry in a way that glasses can't correct.
Difficulty reading and bothersome glare&mdash;particularly when driving at night&mdash;are common complaints.

<SvgFigure figure={cataract} />

## How do I know when it's time for cataract surgery?

Only a doctor can tell you if cataracts are the cause of your vision problem.
Once you're certain that cataracts are the reason you aren't seeing well, the decision to operate is based on several factors:

- **How bad are your symptoms?** If you are struggling with your usual tasks (reading, driving), the surgeon is much more likely to recommend cataract extraction. In most cases, symptoms are the primary reason for proceeding with cataract surgery.
- **How much has your vision declined?** In most cases, your ability to read a vision chart will be reduced by a cataract. Some patients have very severe symptoms, despite being able to read a vision chart well, but if your vision is measurably reduced the doctor is more likely to recommend surgery. A particularly important threshold is the vision requirement for maintaining your driver licence. If you fall below this threshold and you still want to drive, surgery may be recommended.
- **How fast is your prescription changing?** If the cataract is changing your glasses prescription very rapidly, this may cause you to opt for earlier surgery. In addition, glasses can only improve some of the symptoms of cataract, so the overall quality of your vision may be poor, even with updated glasses. During an evaluation for cataract surgery, a lot of emphasis is placed on how much your symptoms can be improved with glasses alone.
