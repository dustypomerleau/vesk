<script lang="ts">
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pl-6 pt-2 sm:pl-16 sm:pt-8">
        <div class="text-2xl font-semibold text-blue-8">Parking</div>
        Parking via Murray Place<br />
        Enter on Maroondah Hwy
    </div>
    <div id="parking-map">
        <ParkingMap />
    </div>
</div>
