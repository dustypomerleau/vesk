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
    import IolDistance from "$lib/svg/IolDistance.svelte";
    import IolNear from "$lib/svg/IolNear.svelte";
    import SvgFigure from "$lib/components/SvgFigure.svelte";
    import type { PhotoFig, SvgFig } from "$lib/types";

    const cataract: SvgFig = {
        svg: Cataract,
        viewBox: "0, 100, 1200, 600",
        size: "large",
        caption: "Compared to a clear lens, a cataract impairs your vision in several ways: It reduces the amount of light entering your eye (poor contrast), changes the color of the image (yellowing), scatters light (glare, blur), and changes where the light is focused (myopic shift).",
    };

    const distance: SvgFig = {
        svg: IolDistance,
        viewBox: "0, 100, 1200, 600",
        size: "large",
        caption: "caption here",
    };

    const near: SvgFig = {
        svg: IolNear,
        viewBox: "0, 100, 1200, 600",
        size: "large",
        caption: "caption here",
    };

    // const mht: PhotoFig = {
    //     image: "mht",
    //     size: "large",
    //     alt: "The Haag-Streit EYESTAR 900 optical biometer",
    //     caption: "haagstreit.com",
// };
</script>

The inside of your eye contains a lens that focuses light.
As you age, the lens gradually becomes less clear.
When the lens becomes yellowed or cloudy, we call it a cataract.
A mild cataract won't affect your vision much, although it may change the prescription in your glasses.
Cataracts gradually worsen with time, and eventually your vision will be blurry in a way that glasses can't correct.
Difficulty reading and bothersome glare&mdash;particularly when driving at night&mdash;are common complaints.

<SvgFigure figure={cataract} />

## How do I know when it's time for cataract surgery?

Only a doctor can tell you if cataracts are the cause of your vision problem.
Once you're certain that cataracts are the reason you aren't seeing well, the decision to operate is based on several factors:

- **How bad are your symptoms?** If you are struggling with your usual tasks (reading, driving), your surgeon is much more likely to recommend cataract extraction. Symptoms are usually the primary reason for proceeding with cataract surgery.
- **How much has your vision declined?** In most cases, your ability to read a vision chart will be reduced by a cataract. Some patients have very severe symptoms, despite being able to read a vision chart well, but if your vision is measurably reduced the doctor is more likely to recommend surgery. A particularly important threshold is the vision requirement for maintaining your driver licence. If you fall below this threshold and you still want to drive, surgery may be recommended.
- **How fast is your prescription changing?** If your glasses prescription is changing very rapidly, you might want earlier surgery. In addition, glasses can only improve some of the symptoms of cataract. The overall quality of your vision may be poor, even with updated glasses. During an evaluation for cataract surgery, a lot of emphasis is placed on how much your symptoms can be improved with glasses alone.
- **How strong is the prescription in your glasses?** Surgeons often try to correct your prescription at the time of cataract surgery (more on how they do that below). If you have a very strong prescription, operating on just one eye can lead to a big difference in prescription between your eyes. This can cause a sensation of eye strain or imbalance. As a result, surgeons are more likely to wait until you are ready for surgery in both eyes. Doing the surgeries closer together (typically 2&ndash;4 weeks apart) will minimise the amount of time that you have to cope with a large difference between your eyes. If you have a very mild prescription, operating on one eye is usually not a problem.

Ultimately, cataract surgery is an elective procedure, and we typically operate when you reach a point where you are unhappy with your vision.
Other lifestyle factors&mdash;such as your age, occupation, or hobbies&mdash;are also taken into consideration.

## What happens during cataract surgery?

In most cases, cataract surgery is an outpatient procedure, requiring a few hours in a hospital or day surgery.
Your experience will consist of several stages:

1. **Dilating the eye:** In order to access the cataract, your pupil needs to be widely dilated. This is usually done by giving several rounds of eye drops over a 15 to 30-minute period.
1. **Local anesthesia:** Most cataract surgery can be performed without a general anesthetic, which means that you don't need a breathing tube, and you are usually awake during the surgery. If needed, your anesthetist can give intravenous medications to help with anxiety. The surgery requires you to lay still for about 30 minutes, but you won't need to hold your eye open. If you have difficulty lying completely flat due to breathing problems or pain in your spine, it's important to discuss this with your surgeon ahead of time. These challenges can usually be overcome with advanced planning. The eye can be numbed by injecting anesthetic to block the nerves that supply your eye, or by injecting medication inside the eye while the surgeon is working. The amount of movement or light that you see during the surgery depends on the details of your anesthesia, but in all cases the goal is for you to be comfortable and pain-free. If the anesthetic is injected inside the eye, this step is performed after the eye is prepared (see below).
1. **Preparing the eye:** The eye and surrounding skin are washed with antiseptic solution, and a drape is applied to keep the field sterile. The drape covers your face, but you will have an oxygen mask and plenty of room to breathe.
1. **Removing the cataract:** Small incisions are made in the cornea, the clear tissue in the front of your eye where you would place a contact lens. The capsule holding the lens is opened, and ultrasound is used to break the lens up and remove it. The machine makes different sounds to give feedback to the surgeon, and it is normal to be able to hear these noises.
1. **Inserting the implant:** The empty capsule is expanded with a surgical gel, and a plastic lens implant is injected to replace the lens that was removed. The implant is positioned, the gel is removed from the eye, and the incisions are sealed. It is common to inject antibiotic and steroid preparations at the end of the surgery.
1. **Dressing the eye:** At this point, the drape is removed and a sterile dressing or protective shield are applied. After a short recovery, you will be able to go home.

## When will I notice improvement in my vision?

Some people have good vision within a day of surgery, and others require time to reach their best vision.
If you are in the group that needs a bit more time, you shouldn't worry. Here are some reasons your recovery might not be immediate:

- **A dense cataract:** Surgeons are trained to minimise the amount of ultrasound energy used to break up the cataract, but there are practical limits to how much the ultrasound can be reduced. If your cataract is very advanced, it may require more energy to remove it. This energy causes some swelling that blurs your vision, and you will not have your best vision until the swelling subsides.
- **Adapting to your lens implant:** Some implants use technology that requires your brain to adapt before you experience the full benefit of the lens (the different types of lens implants are described in detail below). If you are having surgery in both eyes, it is often easier to adjust to the implant after both eyes have been operated.
- **Updating your glasses:** It isn't always possible to achieve independence from glasses with cataract surgery. If you have a very strong prescription, high levels of astigmatism (oval-shaped eye), or variable preoperative measurements, it may be necessary to correct your vision with glasses. In most cases where glasses are required, the strength of your prescription will be lower than it was before surgery. If you are in this group, it's best to wait 4&ndash;6 weeks for your prescription to settle before obtaining new glasses.

## What type of lens implant should I choose?

The most important decision you will make before your cataract surgery is to choose your surgeon.
Once you've found a surgeon you trust, they can make specific recommendations to help you select an implant lens.
As a general rule, you should let your surgeon choose an implant they are comfortable with.
It isn't

<SvgFigure figure={distance} />
<SvgFigure figure={near} />
