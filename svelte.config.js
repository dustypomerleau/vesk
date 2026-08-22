import adapter from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import rehypeClassNames from "rehype-class-names";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".md", ".svelte"],
    kit: { adapter: adapter(), prerender: { handleUnseenRoutes: "warn" } },
    preprocess: [
        vitePreprocess(),
        mdsvex({
            // adding `".md"` to mdsvex extensions puts `{ metadata }` into the exported object!
            extensions: [".md"],
            rehypePlugins: [[rehypeClassNames, { img: "rehype-img", p: "rehype-p" }]],
        }),
    ],
};

export default config;
