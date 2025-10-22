<script lang="ts">
    import Location from "$lib/components/Location.svelte";
    import Parking from "$lib/components/Parking.svelte";
</script>

<div id="location" class="location hash-target">
    <Location />
    <Parking />
</div>

<style>
    .location {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @media (width >= 48rem) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
        }
    }
</style>
