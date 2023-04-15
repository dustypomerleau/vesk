// type of fetch param is (input: Requestinfo | URL, init?: RequestInit | undefined): Promise<Response>
// The brackets around fetch here are just destructuring.
export const load = async ({ fetch }): Promise<{ posts: Array<Post> }> => {
    const response = await fetch("/api/info");
    const posts = await response.json();
    return { posts };
};
