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
            rehypePlugins: [
                [
                    rehypeClassNames,
                    { img: "rehype-img", "h1, h2, h3, h4, h5, h6, p": "rehype-content" },
                ],
            ],
        }),
    ],
};

export default config;
