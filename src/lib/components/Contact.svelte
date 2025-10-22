<script lang="ts">
    import Landline from "$lib/svg/Landline.svelte";
    import Mail from "$lib/svg/Mail.svelte";
    import Message from "$lib/svg/Message.svelte";
    import Print from "$lib/svg/Print.svelte";
    import Radio from "$lib/components/Radio.svelte";
    import Send from "$lib/svg/Send.svelte";
    import Smartphone from "$lib/svg/Smartphone.svelte";
</script>

<div id="contact" class="form contact-form hash-target">
    <div class="card-title">Contact Vic Eye</div>
    <div class="phone">
        <div class="icon-contact">
            <div id="landline-icon-container" class="icon-container">
                <Landline />
            </div>
            <div>
                <a class="link" href="tel:+61391001928">(03) 9100 1928</a>
            </div>
        </div>
        <div class="icon-contact">
            <div id="fax-icon-container" class="icon-container">
                <Print />
            </div>
            <div>(03) 9100 1972</div>
        </div>
    </div>
    <div>
        You can use this form to request an appointment, assistance with your visit, or more
        information. If you are a referring doctor, please use our <a href="/refer" class="link"
            >referral form</a
        >.
    </div>
    <div>Fields marked with * are required.</div>

    <form
        name="ve-contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="other"
        class="form-inner"
    >
        <!-- helper for netlify forms -->
        <input type="hidden" name="form-name" value="ve-contact" />
        <input type="hidden" name="other" />

        <label>
            <span class="field-label">Full name*</span>
            <input name="full-name" type="text" class="field" required />
        </label>

        <label>
            <span class="field-label">Email address*</span>
            <input name="email" type="email" class="field" required />
        </label>

        <label>
            <span class="field-label">Mobile phone*</span>
            <input name="mobile" type="tel" class="field" required />
        </label>

        <div>
            <span class="field-label">Preferred contact method</span>
            <div class="radio-container">
                <Radio name="contact-preference" Icon={Mail} text="Email" />
                <Radio name="contact-preference" Icon={Smartphone} text="Phone" />
                <Radio name="contact-preference" Icon={Message} text="Text message" />
            </div>
        </div>

        <label>
            <span class="field-label">Details of your request</span>
            <textarea name="details" rows="8" maxlength="10000" class="field"></textarea>
        </label>

        <button type="submit" class="button">
            <div id="send-icon-container" class="icon">
                <Send />
            </div>
            <div>Send my request</div>
        </button>
    </form>
</div>

<style>
    .contact-form {
        margin-block-start: var(--space-8);

        @media (width >= 40rem) {
            margin-block-end: var(--space-8);
        }
    }

    .icon-contact {
        display: flex;
        align-items: center;
        gap: var(--space-1);

        color: var(--blue-8);
    }

    /* somewhat redundant with the .icon class */
    .icon-container {
        display: flex;
        flex-direction: column;
    }

    .phone {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: var(--space-8);
        row-gap: var(--space-2);
    }
</style>
