export async function load({ params }) {
    const post = await import(`../${params.slug}.md`);
    const { author, brief, creds, title, date } = post.metadata;
    const Content = post.default;

    return { author, brief, creds, title, date, Content };
}
