<script lang="ts">
    import type { PostMetadata } from "$lib/types";

    export let meta: PostMetadata;
    const { author, creds, image } = meta;
</script>

<div class="flex items-center">
    <div class="h-20 min-h-[5rem] w-20 min-w-[5rem] overflow-hidden rounded-3xl">
        <picture>
            <source type="image/avif" srcset="/{image}.avif" />
            <source type="image/webp" srcset="/{image}.webp" />
            <source type="image/jpeg" srcset="/{image}.jpg" />
            <img src="/{image}.jpg" alt={author} class="h-24 object-cover" />
        </picture>
    </div>
    <div class="flex flex-col pl-4 text-gray-8">
        <div class="text-lg">{author}</div>
        <div class="text-sm leading-none text-gray-7">{creds}</div>
    </div>
</div>
