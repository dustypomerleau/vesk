<script lang="ts">
    // import Cpd from "$lib/components/Cpd.svelte";
</script>

<div id="hero" class="hero">
    <!-- <Cpd /> -->
    <h1>Specialist eye surgeons that care</h1>
</div>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        background-blend-mode: multiply;
        background-color: var(--blue-10);
        background-image: url("/images/hero.webp");
        background-position: top;
        background-size: cover;
        height: 100lvh;

        h1 {
            color: white;
            font-size: calc(var(--fs-base) * 3.75);
            font-weight: var(--fw-light);
            line-height: 1.1;
            padding-block-start: calc(var(--space-4) * 8); /* standard: without Cpd */
            /* padding-block-start: calc(var(--space-4) * 4); */ /* reduced: with Cpd */
            padding-inline: var(--space-7);
            text-align: center;
            width: 100lvw;

            @media (height >= 64rem) {
                padding-block-start: calc(var(--space-4) * 12);
            }

            @media (width >= 48rem) {
                padding-inline: calc(var(--space-4) * 8);
            }

            @media (width >= 64rem) {
                width: 67lvw;
            }
        }
    }
</style>
