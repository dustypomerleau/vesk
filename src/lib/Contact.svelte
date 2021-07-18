<script>
    import Landline from "$lib/svg/Landline.svelte";
    import Mail from "$lib/svg/Mail.svelte";
    import Message from "$lib/svg/Message.svelte";
    import Print from "$lib/svg/Print.svelte";
    import Radio from "$lib/Radio.svelte";
    import Send from "./svg/Send.svelte";
    import Smartphone from "$lib/svg/Smartphone.svelte";
</script>

<div id="contact" class="form">
    <div class="card-title">Contact VicEye</div>
    <div class="flex flex-row flex-wrap gap-x-8 justify-center mb-4">
        <div class="flex flex-row items-center gap-1">
            <div id="landline-icon-container" class="text-blue-700">
                <Landline />
            </div>
            <div>03 0000 0000</div>
        </div>
        <div class="flex flex-row items-center gap-1">
            <div id="fax-icon-container" class="text-blue-700">
                <Print />
            </div>
            <div>03 0000 0000</div>
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
        class="flex flex-col"
    >
        <label class="block mt-4">
            <span class="field-label">Full name</span>
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
            <span class="field-label">Mobile phone</span>
            <input type="tel" placeholder="0400 000 000" class="field" />
        </label>

        <div class="block">
            <span class="field-label">Preferred contact method</span>
            <div class="flex flex-col sm:flex-row">
                <Radio name="contact-preference" text="Email">
                    <Mail />
                </Radio>
                <Radio name="contact-preference" text="Phone">
                    <Smartphone />
                </Radio>
                <Radio name="contact-preference" text="Text message">
                    <Message />
                </Radio>
            </div>
        </div>

        <label class="block mt-6">
            <span class="field-label">Details of your request</span>
            <textarea rows="8" maxlength="10000" class="field" />
        </label>

        <button
            type="submit"
            class="button self-center w-5/6 max-w-xs flex flex-row justify-center items-center"
        >
            <div id="send-icon-container" class="text-blue-200">
                <Send />
            </div>
            <div class="pl-2">Send my request</div>
        </button>
    </form>
</div>
