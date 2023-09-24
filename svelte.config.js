import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    preprocess: [mdsvex({ extensions: [".svelte", ".md"] }), preprocess({ postcss: true }),],
    kit: {
        adapter: adapter(),
    },
};

export default config;
