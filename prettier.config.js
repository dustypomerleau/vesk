const config = {
    overrides: [
        { files: "*.md", options: { tabWidth: 2 } },
        { files: "*.svelte", options: { parser: "svelte" } },
    ],
    plugins: ["prettier-plugin-svelte"],
    printWidth: 100,
    tabWidth: 4,
};

export default config;
