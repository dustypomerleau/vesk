<script lang="ts">
    export let post: Post;
    const {
        meta: { author, creds, image, title },
        path
    } = post;
</script>

<div class="flex flex-wrap bg-blue-300 sm:max-w-xl">
    <picture class="h-28 w-28 overflow-clip rounded-2xl">
        <source type="image/avif" srcset="{image}.avif" />
        <source type="image/webp" srcset="{image}.webp" />
        <source type="image/jpeg" srcset="{image}.jpg" />
        <img
            src="{image}.jpg"
            alt={author}
            style="object-position: -30px 0px 100px 100px;"
            class="h-32 object-cover"
        />
    </picture>
    <div>
        {author}
        <a href={path}>{title}</a>
        {creds}
    </div>
</div>
