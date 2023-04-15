<script lang="ts">
    export let image: string;
    export let alt: string;
</script>

<picture class="rounded-md">
    <source type="image/avif" srcset="/{image}.avif" />
    <source type="image/webp" srcset="/{image}.webp" />
    <source type="image/jpeg" srcset="/{image}.jpg" />
    <img src="/{image}.jpg" {alt} class="w-full object-cover" />
</picture>
