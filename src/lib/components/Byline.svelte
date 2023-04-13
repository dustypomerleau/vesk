<script lang="ts">
    export let author: string;
    export let creds: string;
    export let image: string;
</script>

<!-- gray line div -->
<div class="not-prose">
    <div class="h-20 w-20 overflow-hidden rounded-3xl">
        <picture>
            <source type="image/avif" srcset="/{image}.avif" />
            <source type="image/webp" srcset="/{image}.webp" />
            <source type="image/jpeg" srcset="/{image}.jpg" />
            <img src="/{image}.jpg" alt={author} class="h-24 object-cover" />
        </picture>
    </div>
    <div>
        {author}
        {creds}
    </div>
</div>
