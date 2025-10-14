const config = {
    overrides: [
        { files: "*.md", options: { tabWidth: 2 } },
        { files: "*.svelte", options: { parser: "svelte" } },
        { files: "*.svg", options: { parser: "html" } },
    ],
    plugins: ["@prettier/plugin-oxc", "prettier-plugin-svelte"],
    printWidth: 100,
    tabWidth: 4,
};

export default config;
