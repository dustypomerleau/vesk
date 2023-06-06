import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    // the issues you had with sending width to figures may have to do with tailwind running before mdsvex - can these be reversed?
    preprocess: [preprocess({ postcss: true }), mdsvex({ extensions: [".svelte", ".md"] })],
    kit: {
        adapter: adapter(),
    },
};

export default config;
