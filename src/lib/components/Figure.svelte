<script lang="ts">
    export let image;
    export let caption;
</script>

<picture class="rounded-2xl">
    <source type="image/avif" srcset="{image}.avif" />
    <source type="image/webp" srcset="{image}.webp" />
    <source type="image/jpeg" srcset="{image}.jpg" />
    <img src="{image}.jpg" alt={caption} class="w-full object-cover" />
</picture>
