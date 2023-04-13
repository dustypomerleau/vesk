export async function load({ params }): Promise<Post> {
    const post = await import(`../${params.slug}.md`);
    const { author, brief, creds, date, image, title } = post.metadata;
    const Content = post.default;

    return {
        meta: { author, brief, creds, image, title, date },
        Content
    };
    // todo: rework load functions to return `Post` types, then just pass the whole post as props
}
