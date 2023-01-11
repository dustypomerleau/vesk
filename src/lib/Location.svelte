<script>
    import Apple from "$lib/svg/Apple.svelte";
    import Google from "$lib/svg/Google.svelte";
    import LocationMap from "$lib/svg/LocationMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pt-2 pl-6 sm:pt-8 sm:pl-16">
        <div class="text-2xl font-semibold text-blue-700">Location</div>
        <a class="link" href="https://maps.app.goo.gl/aafsjEXZ3L83jdpW9">
            92 Maroondah Highway
        </a><br />
        Ringwood, Vic 3134<br />
    </div>
    <div id="location-map">
        <LocationMap />
    </div>
</div>
