<script>
    import ParkingMap from "$lib/svg/ParkingMap.svelte";
</script>

<div class="wide-card">
    <div class="absolute pt-2 sm:pt-8 pl-8 sm:pl-16">
        <div class="font-semibold text-xl text-sky-700">Parking</div>
        Access via Murray Place
    </div>
    <div id="parking-map">
        <ParkingMap />
    </div>
</div>
