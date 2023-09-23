// see https://eslint.org/docs/latest/use/configure/configuration-files-new
// to migrate to the new format

module.exports = {
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:svelte/prettier",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
    ],
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        extraFileExtensions: [".svelte"], // required by `@typescript-eslint/parser` v4.24.0.
        sourceType: "module",
        ecmaVersion: 2020,
        project: true,
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            // parse the `<script>` in `.svelte` as typescript:
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        },
    ],
    plugins: ["@typescript-eslint"],
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    // ignorePatterns: ["*.cjs"],
    settings: {
        compileOptions: {
            postcss: {
                configFilePath: "./postcss.config.cjs",
            },
        },
    },
};
