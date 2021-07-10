<script context='module'>
    export const cards = [
        {
            index: 1,
            title: 'Expertise and experience',
            points: [
                'Our specialist surgeons are highly qualified and skilled. We bring subspecialty fellowship training and years of clinical experience to every patient interaction.',
                'We offer the latest in laser, surgical, and medical therapies, customised to your needs. Our diligence and careful investigations ensure the most accurate diagnosis.',
                'Our specialists are fellows of the Royal Australian and New Zealand College of Ophthalmologists ({@html <a href="https://ranzco.edu/" class="link">FRANZCO</a>}).'
            ],
        },
    ]
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
                <li>{point}</li>
            {/each}
        </ul>
    </div>
    <!-- factor out as Button once working -->
    <a href="#doctors" class="button flex flex-row justify-center items-center">
        <div class="text-blue-200">button icon will be here</div>
        <div class="pl-2">button text will be here</div>
    </a>
</div>
