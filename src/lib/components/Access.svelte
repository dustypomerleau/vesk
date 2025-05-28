<script lang="ts">
    import Glasses from "$lib/svg/Glasses.svelte";
    import Medical from "$lib/svg/Medical.svelte";
    import Radio from "$lib/components/Radio.svelte";
    import Send from "$lib/svg/Send.svelte";
    import Stethoscope from "$lib/svg/Stethoscope.svelte";
</script>

<svelte:head>
    <title>Vic Eye &amp; Retina Specialists | Request provider access</title>
</svelte:head>

<div class="form">
    <div class="card-title">Request provider access</div>
    <div>
        Thank you for your interest in our provider-only content! Please fill out the form below to
        help us verify that you are a provider.
    </div>

    <form
        name="ve-provider-access"
        method="post"
        data-netlify="true"
        netlify-honeypot="other"
        class="form-inner"
    >
        <!-- helper for netlify forms -->
        <input type="hidden" name="form-name" value="ve-provider-access" />
        <input type="hidden" name="other" />

        <label>
            <span class="field-label">Full name</span>
            <input name="doc-name" type="text" class="field" />
        </label>

        <label>
            <span class="field-label">Provider number</span>
            <input name="doc-provider" type="text" class="field" />
        </label>

        <label>
            <span class="field-label">Email address</span>
            <input name="doc-email" type="email" class="field" />
        </label>

        <label>
            <span class="field-label">Preferred phone</span>
            <input name="doc-phone" type="tel" class="field" />
        </label>

        <label>
            <span class="field-label">Practice name and location</span>
            <input name="practice" type="text" class="field" />
        </label>

        <!-- todo: fix icons -->
        <div class="radio-set">
            <span class="field-label">Provider type</span>
            <div class="radio-container">
                <Radio name="provider-type" Icon={Glasses} text="Optometrist" />
                <Radio name="provider-type" Icon={Stethoscope} text="GP" />
                <Radio name="provider-type" Icon={Medical} text="Other" />
            </div>
        </div>

        <label class="checkbox">
            <input name="cpd-contact" type="checkbox" />
            <span class="field-label nudge">Please notify me about upcoming CPD events.</span>
        </label>

        <label class="text-area">
            <span class="field-label">Additional information</span>
            <textarea name="details" rows="2" maxlength="10000" class="field"></textarea>
        </label>

        <button type="submit" class="button">
            <div class="icon">
                <Send />
            </div>
            <div>Request access</div>
        </button>
    </form>
</div>

<style>
    .checkbox {
        display: flex;
        align-items: center;
        gap: var(--space-3);

        margin-block-end: var(--space-6);
        margin-block-start: var(--space-4);
    }

    .nudge {
        padding-block-start: 0.05rem;
    }

    .text-area {
        margin-block-start: var(--space-4);
    }
</style>
