/// <reference types="vitest/config" />
import adapter from "@sveltejs/adapter-netlify";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { mdsvex } from "mdsvex";

export default defineConfig({
    plugins: [
        // adding `".md"` to mdsvex extensions puts `{ metadata }` into the exported object!
        mdsvex({ extensions: [".md"] }),
        sveltekit({ extensions: [".md", ".svelte"], adapter: adapter() }),
    ],
});
