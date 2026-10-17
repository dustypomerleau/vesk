/// <reference types="vitest/config" />
import adapter from "@sveltejs/adapter-netlify";
import { svelteTesting } from "@testing-library/svelte/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { mdsvex } from "mdsvex";
import rehypeClassNames from "rehype-class-names";

export default defineConfig({
    plugins: [
        sveltekit({
            extensions: [".md", ".svelte"],
            preprocess: [
                mdsvex({
                    // adding `".md"` to mdsvex extensions puts `{ metadata }` into the exported object!
                    extensions: [".md"],
                    rehypePlugins: [[rehypeClassNames, { img: "rehype-img" }]],
                }),
            ],
            adapter: adapter(),
        }),
    ],
    test: {
        workspace: [
            {
                extends: "./vite.config.ts",
                plugins: [svelteTesting()],
                test: {
                    name: "client",
                    environment: "jsdom",
                    clearMocks: true,
                    include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
                    exclude: ["src/lib/server/**"],
                    setupFiles: ["./vitest-setup-client.ts"],
                },
            },
            {
                extends: "./vite.config.ts",
                test: {
                    name: "server",
                    environment: "node",
                    include: ["src/**/*.{test,spec}.{js,ts}"],
                    exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
                },
            },
        ],
    },
});
