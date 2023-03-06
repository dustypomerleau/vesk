<script>
    import Post from "$lib/components/Post.svelte";
    export let data;
</script>

<div class="m-8">
    <div class="text-2xl font-semibold">Patient Information</div>

    <ul>
        {#each data.posts as post}
            <Post {post} />
        {/each}
    </ul>
</div>
