<script>
    import Location from "$lib/Location.svelte";
    import Parking from "$lib/Parking.svelte";
</script>

<div
    id="location"
    class="flex flex-col md:flex-row md:flex-wrap items-center md:items-stretch justify-start md:justify-center"
>
    <Location />
    <Parking />
</div>
