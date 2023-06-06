<script lang="ts">
    import LocationMap from "$lib/svg/LocationMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pl-6 pt-2 sm:pl-16 sm:pt-8">
        <div class="text-2xl font-semibold text-blue-8">Location</div>
        <a class="link" href="https://maps.app.goo.gl/aafsjEXZ3L83jdpW9">
            92 Maroondah Highway
        </a><br />
        Ringwood, Vic 3134<br />
    </div>
    <div id="location-map">
        <LocationMap />
    </div>
</div>
