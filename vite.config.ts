import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

// bookmark:
// - vite config https://vite.dev/config/
// - svelte config https://svelte.dev/docs/kit/configuration
// - tailwind 4 config https://tailwindcss.com/docs/installation/framework-guides/sveltekit
// - check revision pp to ensure that you still have the corrected body tag fix for svelte 5
// - revisit mdsvex
// - rebase on main
export default defineConfig({
    plugins: [sveltekit()],
    test: { include: ["src/**/*.{test,spec}.{js,ts}"] },
});
