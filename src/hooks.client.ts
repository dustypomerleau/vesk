import type { HandleClientError } from "@sveltejs/kit";
import { initializeClerkClient } from "clerk-sveltekit/client";
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";

initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
    afterSignInUrl: "/provider",
    // todo: likely make this also /provider and use conditional logic to render a form for them to ping me for access
    afterSignUpUrl: "/pending",
    signInUrl: "/login",
    signUpUrl: "/signup",
});

export const handleError: HandleClientError = async ({ error, event }) => {
    console.error(error, event);
};
