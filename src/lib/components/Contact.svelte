<script lang="ts">
    import Landline from "$lib/svg/Landline.svelte";
    import Mail from "$lib/svg/Mail.svelte";
    import Message from "$lib/svg/Message.svelte";
    import Print from "$lib/svg/Print.svelte";
    import Radio from "$lib/components/Radio.svelte";
    import Send from "$lib/svg/Send.svelte";
    import Smartphone from "$lib/svg/Smartphone.svelte";
</script>

<div id="contact" class="form mt-8 sm:mb-8">
    <div class="card-title">Contact Vic Eye</div>
    <div class="mb-4 flex flex-row flex-wrap justify-center gap-x-8 gap-y-2">
        <div class="flex flex-row items-center gap-1">
            <div id="landline-icon-container" class="text-blue-700">
                <Landline width="1.5rem" />
            </div>
            <div>
                <a class="link" href="tel:+61391001928">(03) 9100 1928</a>
            </div>
        </div>
        <div class="flex flex-row items-center gap-1">
            <div id="fax-icon-container" class="text-blue-700">
                <Print width="1.5rem" />
            </div>
            <div>(03) 9100 1972</div>
        </div>
    </div>
    <div class="pb-3">
        You can use this form to request an appointment, assistance with your
        visit, or more information. If you are a referring doctor, please use
        our <a href="/refer" class="link">referral form</a>.
    </div>

    <form
        name="ve-contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="flex flex-col"
    >
        <!-- helper for netlify forms -->
        <input type="hidden" name="form-name" value="ve-contact" />

        <label class="mt-4">
            <span class="field-label">Full name</span>
            <input name="full-name" type="text" placeholder="" class="field" />
        </label>

        <label>
            <span class="field-label">Email address</span>
            <input
                name="email"
                type="email"
                placeholder="email@example.com"
                class="field"
            />
        </label>

        <label>
            <span class="field-label">Mobile phone</span>
            <input
                name="mobile"
                type="tel"
                placeholder="0400 000 000"
                class="field"
            />
        </label>

        <div>
            <span class="field-label">Preferred contact method</span>
            <div class="flex flex-col sm:flex-row">
                <Radio name="contact-preference" icon={Mail} text="Email" />
                <Radio
                    name="contact-preference"
                    icon={Smartphone}
                    text="Phone"
                />
                <Radio
                    name="contact-preference"
                    icon={Message}
                    text="Text message"
                />
            </div>
        </div>

        <label class="mt-6">
            <span class="field-label">Details of your request</span>
            <textarea name="details" rows="8" maxlength="10000" class="field" />
        </label>

        <button
            type="submit"
            class="button flex w-5/6 max-w-xs flex-row items-center justify-center self-center"
        >
            <div id="send-icon-container" class="text-blue-200">
                <Send width="1.5rem" />
            </div>
            <div class="pl-2">Send my request</div>
        </button>
    </form>
</div>
