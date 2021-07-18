<script>
    import Radio from "$lib/Radio.svelte";
    import Send from "$lib/svg/Send.svelte";
</script>

<div class="form">
    <div class="card-title">Refer to VicEye</div>
    <div>
        Thank you for entrusting your patients to the specialists at VicEye. A
        copy of this referral will be sent to your email address, followed by
        confirmation once an appointment has been booked. This form is intended
        for referring doctors. If you are a patient, please use our <a
            href="/#contact"
            class="link">contact form</a
        >.
    </div>

    <form
        name="ve-refer"
        method="post"
        data-netlify="true"
        class="flex flex-col"
    >
        <div class="mt-6 text-lg text-blue-800">Doctor details:</div>
        <div class="bg-gradient-to-r from-blue-700 to-blue-500 h-[2px]" />

        <label class="block mt-4">
            <span class="field-label">Doctor's name</span>
            <input type="text" placeholder="" class="field" />
        </label>

        <label class="block">
            <span class="field-label">Email address</span>
            <input
                type="email"
                placeholder="your.email@example.com"
                class="field"
            />
        </label>

        <label class="block">
            <span class="field-label">Preferred phone</span>
            <input type="tel" placeholder="0400 000 000" class="field" />
        </label>

        <label class="block">
            <span class="field-label">Practice name and location</span>
            <input type="text" placeholder="" class="field" />
        </label>

        <div class="mt-6 text-lg text-blue-800">Patient details:</div>
        <div class="bg-gradient-to-r from-blue-700 to-blue-500 h-[2px]" />

        <label class="block mt-4">
            <span class="field-label">Patient's full name</span>
            <input type="text" placeholder="" class="field" />
        </label>

        <label class="block mt-0">
            <span class="field-label">Date of birth</span>
            <input type="date" value="dd-mm-yyyy" class="field" />
        </label>

        <label class="block">
            <span class="field-label">Email address</span>
            <input
                type="email"
                placeholder="your.email@example.com"
                class="field"
            />
        </label>

        <label class="block">
            <span class="field-label">Phone (mobile preferred)</span>
            <input type="tel" placeholder="0400 000 000" class="field" />
        </label>

        <div class="mt-6 text-lg text-blue-800">Referral details:</div>
        <div class="bg-gradient-to-r from-blue-700 to-blue-500 h-[2px]" />

        <div class="block mt-4">
            <span class="field-label">Preferred specialist</span>
            <div class="flex flex-col sm:flex-row">
                <Radio name="specialist-preference" text="First available" />
                <Radio name="specialist-preference" text="Dr Mei Tan" />
                <Radio name="specialist-preference" text="Dr Dusty Pomerleau" />
            </div>
        </div>

        <label class="block mt-6">
            <span class="field-label">Presumptive diagnosis</span>
            <input type="text" placeholder="" class="field" />
        </label>

        <label class="block">
            <span class="field-label">Further details</span>
            <textarea rows="8" maxlength="10000" class="field" />
        </label>

        <button
            type="submit"
            class="button self-center w-5/6 max-w-xs flex flex-row place-content-center items-center"
        >
            <div class="text-blue-200">
                <Send />
            </div>
            <div class="pl-2">Refer my patient</div>
        </button>
    </form>
</div>
