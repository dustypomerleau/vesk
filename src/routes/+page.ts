import type { PostPath } from "$lib/types";

// typeof fetch is (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
// The brackets around fetch here are just destructuring.
export const load = async ({ fetch }): Promise<{ posts: Array<PostPath> }> => {
    const response = await fetch("/api/info");
    const posts = await response.json();
    return { posts };
};
