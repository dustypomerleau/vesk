import eslint from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default tseslint.config(
    // order matters, as subsequent configs will override
    includeIgnoreFile(gitignorePath),
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: [".svelte"],
                parser: tseslint.parser,
                svelteConfig,
            },
        },
    },
);
