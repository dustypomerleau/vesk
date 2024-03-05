import Clerk from "@clerk/clerk-js";
// @ts-ignore This export is generated at compile time, so tsserver can't see it during dev.
import type { LayoutLoad } from "./$types";
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";

export const prerender = false;
export const ssr = false;

export async function load(): Promise<LayoutLoad> {
    const clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
    await clerk.load();
    // todo: create proper permissions for providers and staff if you get this working
    // you may need to pass the entire `Clerk` instance from `load()` and then call these functions in the layout of interest
    const isProvider = clerk.session.checkAuthorization({ permission: "org:access:provider" });
    const isProviderRole = clerk.session.checkAuthorization({ role: "org:provider" });
    return { isProvider, isProviderRole };
}
