<script lang="ts">
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
</script>

<div class="wide-card">
    <div class="info">
        <div class="card-title gray">Parking</div>
        Parking via Murray Place<br />
        Enter on Maroondah Hwy
    </div>
    <div id="parking-map">
        <ParkingMap />
    </div>
</div>
