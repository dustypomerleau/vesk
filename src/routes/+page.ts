import type { PostPath } from "$lib/types";
import type { PageLoadEvent } from "./$types";

// typeof fetch is (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
// The brackets around fetch here are just destructuring.
export const load = async ({ fetch }: PageLoadEvent): Promise<{ posts: Array<PostPath> }> => {
    const response = await fetch("/api/info");
    const posts = await response.json();
    return { posts };
};
