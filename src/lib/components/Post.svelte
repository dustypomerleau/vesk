<script lang="ts">
    export let post;
    const {
        path,
        meta: { author, image, creds, title }
    } = post;
</script>

<div class="flex h-auto w-full flex-col bg-blue-300 sm:max-w-xl">
    <!-- probably remove the image from the posts list and just use it on the actual post page -->
    <div class="w-1/3 overflow-hidden rounded-t-md">
        <picture>
            <source type="image/avif" srcset="{image}.avif" />
            <source type="image/webp" srcset="{image}.webp" />
            <source type="image/jpeg" srcset="{image}.jpg" />
            <img
                src="{image}.jpg"
                alt={author}
                class="object-cover object-top"
            />
        </picture>
    </div>
    <div>
        {author}
        <a href={path}>{title}</a>
        {creds}
    </div>
</div>
