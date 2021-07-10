<div class="form">
    <div class="card-title">Refer to VicEye</div>
    <div>
        Thank you for entrusting your patients to the specialists at VicEye. A copy of this referral will be sent to your email address, followed by confirmation once an appointment has been booked. This form is intended for referring doctors. If you are a patient, please use our <a href="../#contact" class="link">contact form</a>.
    </div>
    <form name="ve-refer" method="post" data-netlify="true" class="flex flex-col">
        <div class="mt-6 text-lg text-blue-800">Doctor details:</div>
        <div class="bg-gradient-to-r from-blue-700 to-blue-500 h-[2px]"></div>
        <label class="block mt-4">
            <span class="field-label">Doctor's name</span>
            <input type="text" placeholder="" class="field">
        </label>
        <label class="block">
            <span class="field-label">Email address</span>
            <input type="email" placeholder="your.email@example.com" class="field">
        </label>
        <label class="block">
            <span class="field-label">Preferred phone</span>
            <input type="tel" placeholder="0400 000 000" class="field">
        </label>
        <label class="block">
            <span class="field-label">Practice name and location</span>
            <input type="text" placeholder="" class="field">
        </label>
        <div class="mt-6 text-lg text-blue-800">Patient details:</div>
        <div class="bg-gradient-to-r from-blue-700 to-blue-500 h-[2px]"></div>
        <label class="block mt-4">
            <span class="field-label">Patient's full name</span>
            <input type="text" placeholder="" class="field">
        </label>
        <label class="block mt-0">
            <span class="field-label">Date of birth</span>
            <input type="date" value="dd-mm-yyyy" class="field">
        </label>
        <label class="block">
            <span class="field-label">Email address</span>
            <input type="email" placeholder="your.email@example.com" class="field">
        </label>
        <label class="block">
            <span class="field-label">Phone (mobile preferred)</span>
            <input type="tel" placeholder="0400 000 000" class="field">
        </label>
        <div class="mt-6 text-lg text-blue-800">Referral details:</div>
        <div class="bg-gradient-to-r from-blue-700 to-blue-500 h-[2px]"></div>
        <label class="block mt-4">
            <span class="field-label">Preferred specialist</span>
            <div class="flex flex-col sm:flex-row">
                <input id="prefer-first-available" type="radio" name="specialist-preference" value="first-available">
                <label for="prefer-first-available">First available</label>
                <input id="prefer-tan" type="radio" name="specialist-preference" value="tan">
                <label for="prefer-tan">Dr Mei Tan</label>
                <input id="prefer-pomerleau" type="radio" name="specialist-preference" value="pomerleau">
                <label for="prefer-pomerleau">Dr Dusty Pomerleau</label>
            </div>
        </label>
        <label class="block mt-6">
            <span class="field-label">Presumptive diagnosis</span>
            <input type="text" placeholder="" class="field">
        </label>
        <label class="block">
            <span class="field-label">Further details</span>
            <textarea rows="8" maxlength="10000" class="field"></textarea>
        </label>
        <button type="submit" class="button self-center w-5/6 max-w-xs flex flex-row place-content-center items-center">
            <div class="text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25 12 4.75l7.25 14.5-7.25-3.5-7.25 3.5zM12 15.5v-2.75"/></svg>
            </div>
            <div class="pl-2">Refer my patient</div>
        </button>
    </form>
</div>
