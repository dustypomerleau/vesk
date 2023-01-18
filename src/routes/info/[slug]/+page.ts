export async function load({ params }) {
    const post = await import(`../${params.slug}.md`);
    const { author, title } = post.metadata;
    const content = post.default;

    return { author, title, content };
}
