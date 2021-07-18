<script>
    import Deck from "$lib/Deck.svelte";
    import Docs from "$lib/Docs.svelte";
    import Hero from "$lib/Hero.svelte";
    import Maps from "$lib/Maps.svelte";
</script>

<Hero />
<Deck />
<Docs />
<Maps />

<div id="contact" class="form">
    <div class="card-title">Contact VicEye</div>
    <div class="flex flex-row flex-wrap gap-x-8 justify-center mb-4">
        <div class="flex flex-row items-center gap-1">
            <div id="landline-icon-container" class="text-blue-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    ><path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M8.893 4.75H6.068c-.728 0-1.318.59-1.318 1.318 0 7.28 5.902 13.182 13.182 13.182.728 0 1.318-.59 1.318-1.318v-2.825l-3.107-2.071-1.611 1.61c-.28.28-.698.368-1.05.186a11.093 11.093 0 0 1-2.518-1.796 8.726 8.726 0 0 1-1.836-2.542c-.16-.34-.067-.733.199-1l1.637-1.637L8.893 4.75z"
                    /></svg
                >
            </div>
            <div>03 0000 0000</div>
        </div>
        <div class="flex flex-row items-center gap-1">
            <div id="landline-icon-container" class="text-blue-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    ><path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4.75 10.75h14.5v6.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-6.5zM6.75 10.5V4.75h10.5v5.75M7.75 16.25h8.5"
                    /></svg
                >
            </div>
            <div>03 0000 0000</div>
        </div>
    </div>
    <div class="pb-3">
        You can use this form to request an appointment, assistance with your
        visit, or more information. If you are a referring doctor, please use
        our <a href="/refer/" class="link">referral form</a>.
    </div>
    <form
        name="ve-contact"
        method="post"
        data-netlify="true"
        class="flex flex-col"
    >
        <label class="block mt-4">
            <span class="field-label font-light">Full name</span>
            <input type="text" placeholder="" class="field" />
        </label>
        <label class="block">
            <span class="field-label font-light">Email address</span>
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
        <label class="block">
            <span class="field-label">Preferred contact method</span>
            <div class="flex flex-col sm:flex-row">
                <input
                    id="prefer-email"
                    type="radio"
                    name="contact-preference"
                    value="email"
                />
                <label for="prefer-email" class="flex flex-row items-center">
                    <div id="email-icon-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            ><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4.75 7.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2v-8.5z"
                            /><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m5.5 6.5 6.5 5.75 6.5-5.75"
                            /></svg
                        >
                    </div>
                    <div class="pl-2">Email</div>
                </label>
                <input
                    id="prefer-phone"
                    type="radio"
                    name="contact-preference"
                    value="phone"
                />
                <label for="prefer-phone" class="flex flex-row items-center">
                    <div id="phone-icon-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            ><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4.75 6.75a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2V6.75zM10.25 16.75h-.5M18.75 14.25s.5-.906.5-2.25c0-1.344-.5-2.25-.5-2.25"
                            /></svg
                        >
                    </div>
                    <div class="pl-2">Phone</div>
                </label>
                <input
                    id="prefer-sms"
                    type="radio"
                    name="contact-preference"
                    value="sms"
                />
                <label for="prefer-sms" class="flex flex-row items-center">
                    <div id="sms-icon-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            ><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M12 18.25c3.5 0 7.25-1.75 7.25-6.25S15.5 5.75 12 5.75 4.75 7.5 4.75 12c0 1.03.196 1.916.541 2.67.215.47.336.987.24 1.495l-.262 1.399a1 1 0 0 0 1.168 1.167l3.207-.602a2.24 2.24 0 0 1 .764-.003c.527.084 1.062.124 1.592.124z"
                            /><path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM15.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
                            /></svg
                        >
                    </div>
                    <div class="pl-2">Text message</div>
                </label>
            </div>
        </label>
        <label class="block mt-6">
            <span class="field-label">Details of your request</span>
            <textarea rows="8" maxlength="10000" class="field" />
        </label>
        <button
            type="submit"
            class="button self-center w-5/6 max-w-xs flex flex-row justify-center items-center"
        >
            <div id="send-icon-container" class="text-blue-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    ><path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4.75 19.25 12 4.75l7.25 14.5-7.25-3.5-7.25 3.5zM12 15.5v-2.75"
                    /></svg
                >
            </div>
            <div class="pl-2">Send my request</div>
        </button>
    </form>
</div>

<div
    id="footer"
    class="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 lg:gap-12 p-8 sm:px-12 bg-gray-300"
>
    <div class="font-medium text-orange-700">
        &copy;2021 Vic&nbsp;Eye&nbsp;and&nbsp;Retina&nbsp;Specialists
        Pty&nbsp;Ltd
    </div>
    <a href="/"
        ><div class="lg:text-center"><span class="link">Home</span></div></a
    >
    <a href="#doctors"
        ><div class="lg:text-center">
            <span class="link">Specialists</span>
        </div></a
    >
    <a href="#location"
        ><div class="lg:text-center"><span class="link">Location</span></div></a
    >
    <a href="#contact"
        ><div class="lg:text-center"><span class="link">Contact</span></div></a
    >
    <a href="/refer/"
        ><div class="lg:text-center"><span class="link">Refer</span></div></a
    >
</div>
