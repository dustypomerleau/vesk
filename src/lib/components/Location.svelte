<script lang="ts">
    import LocationMap from "$lib/svg/LocationMap.svelte";
</script>

<div class="wide-card">
    <div class="info">
        <div class="card-title gray">Location</div>
        <a class="link" href="https://maps.app.goo.gl/aafsjEXZ3L83jdpW9">
            92 Maroondah Highway
        </a><br />
        Ringwood, Vic 3134<br />
    </div>
    <div id="location-map">
        <LocationMap />
    </div>
</div>
