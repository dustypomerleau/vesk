export async function load({ params }): Promise<PostContent> {
    const post = await import(`../${params.slug}.md`);
    const { author, brief, creds, date, image, title } = post.metadata;
    const Content = post.default;

    return {
        meta: { author, brief, creds, image, title, date },
        Content
    };
}
