import eslint from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import tseslint from "typescript-eslint";
// note: for now, you have removed svelte-eslint-parser,
// but this may do better with Svelte 5 syntax and runes

export default tseslint.config(
    // order matters, as subsequent configs will override
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...svelte.configs["flat/recommended"],
    prettier,
    ...svelte.configs["flat/prettier"],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.svelte"],

        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
    },
    {
        ignores: ["build/", ".svelte-kit/", "dist/"],
    },
);
