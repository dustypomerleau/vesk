export {};

declare global {
    interface ClerkAuthorization {
        permission: "org:provider:access" | "org:staff:access";
        role: "org:provider" | "org:staff";
    }
}
