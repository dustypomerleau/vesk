<script>
    import Location from "$lib/components/Location.svelte";
    import Parking from "$lib/components/Parking.svelte";
</script>

<div
    id="location"
    class="flex flex-col items-center justify-start md:flex-row md:flex-wrap md:items-stretch md:justify-center"
>
    <Location />
    <Parking />
</div>
