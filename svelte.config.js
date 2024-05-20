import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: { runes: true },
    extensions: [".svelte", ".md"],
    preprocess: [mdsvex({ extensions: [".svelte", ".md"] }), vitePreprocess()],
    kit: { adapter: adapter() },
};

export default config;
