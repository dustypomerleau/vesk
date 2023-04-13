export async function load({ params }) {
    const post = await import(`../${params.slug}.md`);
    const { author, brief, creds, image, title, date } = post.metadata;
    const Content = post.default;

    return { author, brief, creds, image, title, date, Content };
    // todo: rework load functions to return `Post` types, then just pass the whole post as props
}
