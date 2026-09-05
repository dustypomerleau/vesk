<script lang="ts">
    import Calendar from "$lib/svg/Calendar.svelte";
    import Dp from "$lib/svg/Dp.svelte";
    import Mt from "$lib/svg/Mt.svelte";
    import Radio from "$lib/components/Radio.svelte";
    import Send from "$lib/svg/Send.svelte";
</script>

<div class="form">
    <div class="card-title">Refer to Vic Eye</div>
    <div>
        Thank you for entrusting your patients to the specialists at Vic Eye. You will receive a
        confirmation email once an appointment has been booked. This form is intended for referring
        doctors. If you are a patient, please use our <a href="/contact" class="link"
            >contact form</a
        >.
    </div>
    <div>Fields marked with * are required.</div>

    <form
        name="ve-refer"
        method="post"
        data-netlify="true"
        netlify-honeypot="other"
        class="form-inner"
    >
        <!-- helper for netlify forms -->
        <input type="hidden" name="form-name" value="ve-refer" />
        <input type="hidden" name="other" />

        <div>
            <div class="section-title">Doctor details:</div>
            <div class="divider"></div>
        </div>

        <label>
            <span class="field-label">Doctor's name*</span>
            <input name="doc-name" type="text" class="field" required />
        </label>

        <label>
            <span class="field-label">Provider number*</span>
            <input name="doc-provider" type="text" class="field" required />
        </label>

        <label>
            <span class="field-label">Email address*</span>
            <input name="doc-email" type="email" class="field" required />
        </label>

        <label>
            <span class="field-label">Preferred phone*</span>
            <input name="doc-phone" type="tel" class="field" required />
        </label>

        <label>
            <span class="field-label">Practice name and location</span>
            <input name="practice" type="text" class="field" />
        </label>

        <div>
            <div class="section-title">Patient details:</div>
            <div class="divider"></div>
        </div>

        <label>
            <span class="field-label">Patient's full name*</span>
            <input name="patient-name" type="text" class="field" required />
        </label>

        <label>
            <span class="field-label">Date of birth</span>
            <input name="patient-dob" type="date" value="dd-mm-yyyy" class="field" />
        </label>

        <label>
            <span class="field-label">Email address</span>
            <input name="patient-email" type="email" class="field" />
        </label>

        <label>
            <span class="field-label">Mobile phone*</span>
            <input name="patient-phone" type="tel" class="field" />
        </label>

        <div>
            <div class="section-title">Referral details:</div>
            <div class="divider"></div>
        </div>

        <div>
            <span class="field-label">Preferred specialist</span>
            <div class="radio-container">
                <Radio name="specialist-preference" Icon={Calendar} text="First available" />
                <Radio name="specialist-preference" Icon={Mt} text="Dr Tan" />
                <Radio name="specialist-preference" Icon={Dp} text="Dr Pomerleau" />
            </div>
        </div>

        <label>
            <span class="field-label">Presumptive diagnosis</span>
            <input name="diagnosis" type="text" class="field" />
        </label>

        <label>
            <span class="field-label">Further details</span>
            <textarea name="details" rows="8" maxlength="10000" class="field"></textarea>
        </label>

        <button type="submit" class="button">
            <div class="icon">
                <Send />
            </div>
            <div>Refer my patient</div>
        </button>
    </form>
</div>

<style>
    .divider {
        background-image: linear-gradient(to right, var(--blue-8), var(--blue-6));
        height: 2px;
    }

    .section-title {
        color: var(--blue-9);
        font-size: var(--fs-xl);
    }
</style>