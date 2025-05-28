<script lang="ts">
    import Share from "$lib/svg/Share.svelte";
</script>

<div id="cpd" class="cpd">
    Referring doctors can
    <a
        href="https://in4med-23651214.hubspotpagebuilder.com/"
        target="_blank"
        rel="noreferrer"
        class="cta-link">register here</a
    >
    <span class="cta-icon"><Share width="1.3rem" /></span>
    for our upcoming CPD evening.
</div>

<style>
    .cpd {
        background-color: var(--orange-7);
        color: white;
        font-size: var(--fs-xl);
        padding: var(--space-4);
        width: 100%;

        @media (width >= 40rem) {
            text-align: center;
        }
    }

    .cta-icon {
        display: inline-flex;
        vertical-align: middle;

        color: var(--blue-1);
    }

    .cta-link {
        color: var(--blue-1);
        text-decoration: underline;
        text-decoration-color: var(--blue-2);
        text-decoration-line: underline;

        &:focus,
        &:hover {
            text-decoration-thickness: 3px;
        }
    }
</style>
