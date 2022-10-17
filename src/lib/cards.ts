import Eye from "$lib/svg/Eye.svelte";
import Mail from "$lib/svg/Mail.svelte";
import Pin from "$lib/svg/Pin.svelte";
import UserPlus from "$lib/svg/UserPlus.svelte";

export const cards = [
    {
        title: "Expertise and experience",
        points: [
            "Our specialist surgeons are highly qualified and skilled. We bring subspecialty fellowship training and years of clinical experience to every patient interaction.",

            "We offer the latest in laser, surgical, and medical therapies, customised to your needs. Our diligence and careful investigations ensure the most accurate diagnosis.",

            'Our specialists are fellows of the Royal Australian and New Zealand College of Ophthalmologists (<a href="https://ranzco.edu/" class="link">FRANZCO</a>).'
        ],
        link: {
            icon: Eye,
            buttonText: "Meet our surgeons",
            href: "/#doctors"
        }
    },
    {
        title: "Trusted by referrers",
        points: [
            "Referring doctors deserve timely communication and respectful collaboration. We keep the patient's entire care team connected and informed.",

            "We care for the full spectrum of ophthalmic conditions, including complex vitreoretinal diseases, medical retina, and uveitis.",

            "Our approach to cataract surgery is data-driven and patient-centred. We choose intraocular lenses that maximise individual quality of life.",

            "We accept emergency patients and same-day referrals. Our doctors are always available to speak with you about high-acuity patients."
        ],
        link: {
            icon: UserPlus,
            buttonText: "Make a referral",
            href: "/refer"
        }
    },
    {
        title: "Convenient location",
        points: [
            "Our Ringwood practice has abundant parking, close to the M3, Ringwood Train Station, and Eastland Shopping Centre.",

            'Our ground-floor office is accessible to wheelchairs and walkers. Feel free to <a href="/#contact" class="link">contact us</a> in advance if you require any special assistance for your visit.',

            "See below for detailed information on how to visit us."
        ],
        link: {
            icon: Pin,
            buttonText: "Location and parking",
            href: "/#location"
        }
    },
    {
        title: "More information",
        points: [
            'If you would like to request an appointment—or more information—please <a href="#contact" class="link">reach out</a>. Our team will be in touch to arrange a consultation.',

            "Referrals are required for most of our services. If you have questions about the process, or need help obtaining a referral, we are happy to assist."
        ],
        link: {
            icon: Mail,
            buttonText: "Contact us",
            href: "/#contact"
        }
    }
];
