// examples of the new config:
// https://github.com/sveltejs/eslint-plugin-svelte/issues/732

// @ts-check

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";

// todo: revisit https://typescript-eslint.io/users/configs
// also see: https://typescript-eslint.io/getting-started/
// you need to also use the setup function: https://typescript-eslint.io/packages/typescript-eslint/#config
export default tseslint.config(
    // order matters, as subsequent configs will override
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...svelte.configs["flat/prettier"],
    prettier,
    {
        name: "svelte",
        files: ["**/*.svelte"],
        parser: svelteParser,
        // previously `parserOptions` also needed `extraFileExtensions: [".svelte"]`, but this seems to work without now
        parserOptions: { parser: tseslint.parser },
        // previously `settings: { compileOptions: { postcss: { configFilePath: "./postcss.config.cjs", },`
        // but this also no longer seems to be needed
    },
);
