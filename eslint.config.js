// examples of the new config:
// https://github.com/sveltejs/eslint-plugin-svelte/issues/732

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import typescript from "typescript-eslint";

export default [
    // order matters, as subsequent configs will override
    eslint.configs.recommended,
    ...typescript.configs.recommended,
    ...svelte.configs["flat/prettier"],
    prettier,
    {
        name: "svelte",
        files: ["**/*.svelte"],
        parser: svelteParser,
        // previously `parserOptions` also needed `extraFileExtensions: [".svelte"]`, but this seems to work without now
        parserOptions: { parser: typescript.parser },
        // previously `settings: { compileOptions: { postcss: { configFilePath: "./postcss.config.cjs", },`
        // but this also no longer seems to be needed
    },
];
