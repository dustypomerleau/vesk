<script context="module">
    export const cards = [
        {
            index: 1,
            title: "Expertise and experience",
            points: [
                "Our specialist surgeons are highly qualified and skilled. We bring subspecialty fellowship training and years of clinical experience to every patient interaction.",
                "We offer the latest in laser, surgical, and medical therapies, customised to your needs. Our diligence and careful investigations ensure the most accurate diagnosis.",
                'Our specialists are fellows of the Royal Australian and New Zealand College of Ophthalmologists (<a href="https://ranzco.edu/" class="link">FRANZCO</a>).',
            ],
        },
    ];
</script>

<script>
    export let title;
    export let points;
</script>

<div class="card">
    <div>
        <h2 class="card-title">{title}</h2>
        <ul>
            {#each points as point}
                <li>{@html point}</li>
            {/each}
        </ul>
    </div>
    <!-- factor out as Button once working -->
    <!-- perhaps put a slot after the ul for the button and then put two named slots in the button -->
    <a href="#doctors" class="button flex flex-row justify-center items-center">
        <div class="text-blue-200">button icon will be here</div>
        <div class="pl-2">button text will be here</div>
    </a>
</div>

<!-- todo: investigate what is affecting the text-indent + margin-left combination you used to get correct alignment on the first line of each bullet. It is working Ok in the non-svelte repo.

However adjusting the text indent from -1.85 to -1.65 seems to compensate - unclear where the extra value came from.

-->

<!-- <style lang="postcss">
    li {
        @apply mb-4 hover:text-gray-700;
    }

    li::before {
        @apply inline-block bg-check bg-contain w-4 h-4 mr-2 content-[''];
    }

    ul {
        text-indent: -1.85rem;
        margin-left: 1rem;
        margin-right: 0.5rem;
    }
</style> -->
