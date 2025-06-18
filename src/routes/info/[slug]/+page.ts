import type { PostContent, PostMetadata } from "$lib/types";
import type { Component } from "svelte";

// params:
// Parameters of the target page - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object.
// bookmark: todo: this is throwing an error:
// hint: some people have had problems with casing issues, and you're using capital Content
// but in this case, the problem is that vite is trying to import a markdown file you didn't create?
// where is `preload.js.map.md` coming from?
//
// Error: Unknown variable dynamic import: ../preload.js.map.md
//     at /Users/dn/me/vesk/vite/dynamic-import-helper.js:10:9
//     at new Promise (<anonymous>)
//     at __vite_ssr_export_default__ (/Users/dn/me/vesk/vite/dynamic-import-helper.js:6:10)
//     at load (/Users/dn/me/vesk/src/routes/info/[slug]/+page.ts:8:39)
//     at load_data (/Users/dn/me/vesk/node_modules/.pnpm/@sveltejs+kit@2.21.5_@sveltejs+vite-plugin-svelte@5.1.0_svelte@5.34.5_vite@6.3.5_@types_a83d7c8fdb834413a46df747fb39d549/node_modules/@sveltejs/kit/src/runtime/server/page/load_data.js:204:43)
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async eval (/Users/dn/me/vesk/node_modules/.pnpm/@sveltejs+kit@2.21.5_@sveltejs+vite-plugin-svelte@5.1.0_svelte@5.34.5_vite@6.3.5_@types_a83d7c8fdb834413a46df747fb39d549/node_modules/@sveltejs/kit/src/runtime/server/page/index.js:183:13)
// Error: Unknown variable dynamic import: ../plugins.js.map.md
//     at /Users/dn/me/vesk/vite/dynamic-import-helper.js:10:9
//     at new Promise (<anonymous>)
//     at __vite_ssr_export_default__ (/Users/dn/me/vesk/vite/dynamic-import-helper.js:6:10)
//     at load (/Users/dn/me/vesk/src/routes/info/[slug]/+page.ts:8:39)
//     at load_data (/Users/dn/me/vesk/node_modules/.pnpm/@sveltejs+kit@2.21.5_@sveltejs+vite-plugin-svelte@5.1.0_svelte@5.34.5_vite@6.3.5_@types_a83d7c8fdb834413a46df747fb39d549/node_modules/@sveltejs/kit/src/runtime/server/page/load_data.js:204:43)
//     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
//     at async eval (/Users/dn/me/vesk/node_modules/.pnpm/@sveltejs+kit@2.21.5_@sveltejs+vite-plugin-svelte@5.1.0_svelte@5.34.5_vite@6.3.5_@types_a83d7c8fdb834413a46df747fb39d549/node_modules/@sveltejs/kit/src/runtime/server/page/index.js:183:13)
//
export async function load({ params }: { params: { slug: string } }): Promise<PostContent> {
    const { metadata: meta, default: Content }: { metadata: PostMetadata; default: Component } =
        await import(`../${params.slug}.md`);

    return { meta, Content };
}
