export const load = async ({ fetch }): Promise<{ posts: Array<Post> }> => {
    const response = await fetch("/api/info");
    const posts = await response.json();
    return { posts };
};
