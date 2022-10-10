<script>
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pt-2 pl-8 sm:pt-8 sm:pl-16">
        <div class="text-xl font-semibold text-sky-700">Parking</div>
        Access via Murray Place
    </div>
    <div id="parking-map">
        <ParkingMap />
    </div>
</div>
