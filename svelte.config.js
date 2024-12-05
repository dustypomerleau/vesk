import adapter from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".md", ".svelte"],
    kit: { adapter: adapter() },
    // adding `".md"` to mdsvex extensions puts `{ metadata }` into the exported object!
    preprocess: [vitePreprocess(), mdsvex({ extensions: [".md"] })],
};

export default config;
