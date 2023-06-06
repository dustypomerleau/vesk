module.exports = {
    overrides: [
        { files: "*.md", options: { tabWidth: 2 } },
        { files: "*.svelte", options: { parser: "svelte" } },
    ],
    pluginSearchDirs: false,
    printWidth: 100,
    tabWidth: 4,
    tailwindConfig: "./tailwind.config.cjs",
    plugins: [require("prettier-plugin-svelte"), require("prettier-plugin-tailwindcss")],
};
