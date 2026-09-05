import type { Doc } from "$lib/types";

export const doctors: Array<Doc> = [
    {
        name: "Mei Tan",
        credentials: "MB ChB BAO, PhD, FRCOphth, FRANZCO",
        specialties: "Medical &amp; surgical retina, cataract",
        bio: [
            "Dr Tan received her specialist training in the UK, completing a PhD in gene therapy at University College London and her clinical training at Oxford Eye Hospital. She then completed vitreoretinal fellowships at the Royal Perth Hospital and the Royal Adelaide Hospital before settling in Melbourne.",

            "Dr Tan conducts clinical research in age-related macular degeneration, including a co-investigator role in clinical trials at the Royal Melbourne Hospital. Additional personal research interests include genetic eye disease, diabetic retinopathy, and vitreoretinal surgery.",
        ],
        image: "mt",
        alt: "Doctor Mei Tan headshot",
    },
    {
        name: "Dusty Pomerleau",
        credentials: "MD, FRANZCO",
        specialties: "Medical &amp; surgical retina, cataract, uveitis",
        bio: [
            "Dr Pomerleau received his specialist training at California Pacific Medical Center in San Francisco, followed by a fellowship in medical retina at Duke University, and a vitreoretinal fellowship at the University of Alabama.",
            "Dr Pomerleau's appointment at the Royal Melbourne Hospital includes primary and co-investigator roles in multiple clinical trials for age-related macular degeneration. His personal research interests include macular hole and retinal detachment surgery, as well as inflammatory eye disease.",
        ],
        image: "dp",
        alt: "Doctor Dusty Pomerleau headshot",
    },
    {
        name: "Uday Bhatt",
        credentials: "MBBS, DTMH, DO, MSc(EBP), FRCSEd, FRCOphth, FRANZCO",
        specialties: "Cornea, refractive surgery, cataract",
        bio: [
            "Dr Bhatt received his fellowship training in cornea and external disease at Queens Medical Centre in Nottingham, UK.",
            "He performs the latest techniques in corneal surgery, including collagen crosslinking and corneal allogenic intrastromal ring segments (CAIRS) for keratoconus, modern corneal transplant techniques, and a full suite of refractive surgery offerings, including LASIK, PRK, SMILE, and refractive lens exchange.",
            "In addition to his subspecialty expertise, Dr Bhatt also treats glaucoma and performs eyelid surgery.",
        ],
        image: "ub",
        alt: "Doctor Uday Bhatt headshot",
    },
    {
        name: "Matthew Kuet",
        credentials: "MBBChir, MA (Cantab), FRANZCO",
        specialties: "Glaucoma, cataract",
        bio: [
            "Dr Matthew Kuet is a UK and Australian trained Cataract and Glaucoma Eye Specialist based in Melbourne. He graduated from medical school at the University of Cambridge and completed his ophthalmology training in the United Kingdom.",
            "Dr Kuet is one of several eye surgeons nationally to have completed two additional advanced Glaucoma Fellowships to gain in depth training in complex cataract and glaucoma surgery. He completed his first Fellowship at the Royal Victorian Eye and Ear Hospital, followed by a second at Moorfields Eye Hospital in London, an international centre of excellence for complex glaucoma management.",
            "Dr Kuet is known for his compassionate approach and taking the time to listen to his patients. His areas of clinical expertise include cataract surgery and the most up to date medical and surgical management of glaucoma, including the use of minimally invasive glaucoma surgery.",
            "Dr Kuet holds a public consultant post on the Glaucoma Unit at the Royal Victorian Eye and Ear Hospital, where he trains the next generation of glaucoma specialists. Here he leads the collaborative glaucoma monitoring clinic involving optometrists, orthoptists, and nurses to care for advanced glaucoma patients.",
        ],
        image: "mk",
        alt: "Doctor Matthew Kuet headshot",
    },
];
