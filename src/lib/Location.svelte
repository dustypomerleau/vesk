<script>
    import Apple from "$lib/svg/Apple.svelte";
    import Google from "$lib/svg/Google.svelte";
    import LocationMap from "$lib/svg/LocationMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pt-2 pl-6 sm:pt-8 sm:pl-16">
        <div class="text-2xl font-semibold text-blue-700">Location</div>
        92 Maroondah Highway<br />
        Ringwood, Vic 3134<br />
        <div id="maps" class="flex flex-row items-end gap-8 p-2">
            <a
                aria-label="Google Maps link"
                href="https://goo.gl/maps/2NJ7hPJRejXHEu727"
            >
                <div id="google-maps" class="link">
                    <div
                        id="google-maps-svg-container"
                        class="flex flex-row items-start justify-center opacity-80"
                    >
                        <Google />
                    </div>
                    <div class="text-center">Google</div>
                </div>
            </a>
            <a
                aria-label="Apple Maps link"
                href="https://maps.apple.com/?address=92%20Maroondah%20Highway,%20Ringwood%20VIC%203134,%20Australia&ll=-37.816640,145.225806&q=92%20Maroondah%20Highway&_ext=EiYpPjjp1hrpQsAxVdaqOAsnYkA5wGLDevTnQsBBHZo+YGgnYkBQBA%3D%3D"
            >
                <div id="apple-maps" class="link">
                    <div
                        id="apple-maps-svg-container"
                        class="flex flex-row items-start justify-center opacity-80"
                    >
                        <Apple />
                    </div>
                    <div class="mt-0.5 text-center">Apple</div>
                </div>
            </a>
        </div>
    </div>
    <div id="location-map">
        <LocationMap />
    </div>
</div>
