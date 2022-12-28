import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess({ postcss: true })],
    // added prerender settings per this github issue re: netlify forms:
    // https://github.com/sveltejs/kit/issues/942
    prerender: {
        crawl: true,
        enabled: true,
        onError: "continue",
        entries: ["*"]
    },
    kit: { adapter: adapter() }
};

export default config;
