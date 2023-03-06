<script>
    export let data;
    // const {
    //     posts: {
    //         meta: { author, creds, title, date },
    //         Content
    //     }
    // } = data;
</script>

info posts

<ul>
    <!-- todo: account for situation where there are no posts -->
    {#each data.posts as post}
        {post.meta.author}
    {/each}
</ul>
