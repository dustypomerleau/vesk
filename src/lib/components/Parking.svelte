<script>
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pt-2 pl-6 sm:pt-8 sm:pl-16">
        <div class="text-2xl font-semibold text-blue-700">Parking</div>
        Parking via Murray Place<br />
        Enter on Maroondah Hwy
    </div>
    <div id="parking-map">
        <ParkingMap />
    </div>
</div>
