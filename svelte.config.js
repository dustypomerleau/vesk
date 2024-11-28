import adapter from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".md", ".svelte"],
    kit: { adapter: adapter() },
    preprocess: [vitePreprocess(), mdsvex()],
};

export default config;
