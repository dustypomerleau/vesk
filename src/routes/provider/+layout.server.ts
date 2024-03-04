import Clerk from "@clerk/clerk-js";
// @ts-ignore This export is generated at compile time, so tsserver can't see it during dev.
import type { LayoutServerLoad } from "./$types";
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";

export const prerender = false;

export async function load(): Promise<LayoutServerLoad> {
    const clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
    await clerk.load();
    const user = clerk.user;
    return { user };
}
