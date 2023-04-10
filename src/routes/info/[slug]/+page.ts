import type { PageData } from "./$types.js";

export async function load({ params }): PageData {
    const post = await import(`../${params.slug}.md`);
    const { author, creds, title, date } = post.metadata;
    const Content = post.default;

    return { author, creds, title, date, Content };
}
