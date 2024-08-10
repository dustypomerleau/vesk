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

<div class="form sm:my-8">
    <div class="card-title">Request provider access</div>
    <div>
        Thank you for your interest in our provider-only content! Please fill out the form below to
        help us verify that you are a provider.
    </div>

    <form
        name="ve-provider-access"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="flex flex-col"
    >
        <!-- helper for netlify forms -->
        <input type="hidden" name="form-name" value="ve-provider-access" />

        <label class="mt-6">
            <span class="field-label">Full name</span>
            <input name="doc-name" type="text" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Provider number</span>
            <input name="doc-provider" type="text" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Email address</span>
            <input name="doc-email" type="email" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Preferred phone</span>
            <input name="doc-phone" type="tel" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Practice name and location</span>
            <input name="practice" type="text" placeholder="" class="field" />
        </label>

        <!-- todo: fix icons -->
        <div class="mb-6 mt-4">
            <span class="field-label">Provider type</span>
            <div class="flex flex-col sm:flex-row">
                <Radio name="provider-type" icon={Glasses} text="Optometrist" />
                <Radio name="provider-type" icon={Stethoscope} text="GP" />
                <Radio name="provider-type" icon={Medical} text="Other" />
            </div>
        </div>

        <label class="mb-6 mt-4 flex items-center">
            <input name="cpd-contact" type="checkbox" class="mr-3" />
            <span class="field-label pt-[0.05rem]">Please notify me about upcoming CPD events.</span
            >
        </label>

        <label class="mt-4">
            <span class="field-label">Additional information</span>
            <textarea name="details" rows="2" maxlength="10000" class="field"></textarea>
        </label>

        <button
            type="submit"
            class="button flex w-5/6 max-w-xs flex-row place-content-center items-center self-center"
        >
            <div class="text-blue-3">
                <Send />
            </div>
            <div class="pl-2">Request access</div>
        </button>
    </form>
</div>
