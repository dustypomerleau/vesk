<script lang="ts">
    import Calendar from "$lib/svg/Calendar.svelte";
    import Dp from "$lib/svg/Dp.svelte";
    import Mt from "$lib/svg/Mt.svelte";
    import Radio from "$lib/components/Radio.svelte";
    import Send from "$lib/svg/Send.svelte";
</script>

<div class="form sm:my-8">
    <div class="card-title">Refer to Vic Eye</div>
    <div>
        Thank you for entrusting your patients to the specialists at Vic Eye.
        You will receive a confirmation email once an appointment has been
        booked. This form is intended for referring doctors. If you are a
        patient, please use our <a href="/#contact" class="link">contact form</a
        >.
    </div>

    <form
        name="ve-refer"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="flex flex-col"
    >
        <!-- helper for netlify forms -->
        <input type="hidden" name="form-name" value="ve-refer" />

        <div class="mt-6 text-xl text-blue-800">Doctor details:</div>
        <div class="h-[2px] bg-gradient-to-r from-blue-700 to-blue-500" />

        <label class="mt-4">
            <span class="field-label">Doctor's name</span>
            <input name="doc-name" type="text" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Email address</span>
            <input
                name="doc-email"
                type="email"
                placeholder="doctor.email@example.com"
                class="field"
            />
        </label>

        <label>
            <span class="field-label">Preferred phone</span>
            <input
                name="doc-phone"
                type="tel"
                placeholder="0400 000 000"
                class="field"
            />
        </label>

        <label>
            <span class="field-label">Practice name and location</span>
            <input name="practice" type="text" placeholder="" class="field" />
        </label>

        <div class="mt-6 text-xl text-blue-800">Patient details:</div>
        <div class="h-[2px] bg-gradient-to-r from-blue-700 to-blue-500" />

        <label class="mt-4">
            <span class="field-label">Patient's full name</span>
            <input
                name="patient-name"
                type="text"
                placeholder=""
                class="field"
            />
        </label>

        <label class="mt-0">
            <span class="field-label">Date of birth</span>
            <input
                name="patient-dob"
                type="date"
                value="dd-mm-yyyy"
                class="field"
            />
        </label>

        <label>
            <span class="field-label">Email address</span>
            <input
                name="patient-email"
                type="email"
                placeholder="patient.email@example.com"
                class="field"
            />
        </label>

        <label>
            <span class="field-label">Mobile phone</span>
            <input
                name="patient-phone"
                type="tel"
                placeholder="0400 000 000"
                class="field"
            />
        </label>

        <div class="mt-6 text-xl text-blue-800">Referral details:</div>
        <div class="h-[2px] bg-gradient-to-r from-blue-700 to-blue-500" />

        <div class="mt-4">
            <span class="field-label">Preferred specialist</span>
            <div class="flex flex-col sm:flex-row">
                <Radio
                    name="specialist-preference"
                    icon={Calendar}
                    text="First available"
                />
                <Radio name="specialist-preference" icon={Mt} text="Dr Tan" />
                <Radio
                    name="specialist-preference"
                    icon={Dp}
                    text="Dr Pomerleau"
                />
            </div>
        </div>

        <label class="mt-6">
            <span class="field-label">Presumptive diagnosis</span>
            <input name="diagnosis" type="text" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Further details</span>
            <textarea name="details" rows="8" maxlength="10000" class="field" />
        </label>

        <button
            type="submit"
            class="button flex w-5/6 max-w-xs flex-row place-content-center items-center self-center"
        >
            <div class="text-blue-200">
                <Send />
            </div>
            <div class="pl-2">Refer my patient</div>
        </button>
    </form>
</div>
