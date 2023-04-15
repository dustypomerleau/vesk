<script lang="ts">
    export let meta: PostMetadata;
    const { author, creds, image } = meta;
</script>

<div class="flex items-center">
    <div class="h-20 w-20 overflow-hidden rounded-3xl">
        <picture>
            <source type="image/avif" srcset="/{image}.avif" />
            <source type="image/webp" srcset="/{image}.webp" />
            <source type="image/jpeg" srcset="/{image}.jpg" />
            <img src="/{image}.jpg" alt={author} class="h-24 object-cover" />
        </picture>
    </div>
    <div class="flex flex-col pl-4 text-gray-600">
        <div class="text-lg">{author}</div>
        <div class="text-sm text-gray-500">{creds}</div>
    </div>
</div>
