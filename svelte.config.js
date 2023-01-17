import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        mdsvex({ extensions: [".md"] }),
        preprocess({ postcss: true })
    ],
    kit: {
        adapter: adapter()
        // previously added (then removed) prerender settings per this github issue re: netlify forms:
        // https://github.com/sveltejs/kit/issues/942
    }
};

export default config;
