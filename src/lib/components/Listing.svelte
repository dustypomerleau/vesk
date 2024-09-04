<script lang="ts">
    import Amd from "$lib/svg/Amd.svelte";
    import Iol from "$lib/svg/Iol.svelte";
    import RetinalTear from "$lib/svg/RetinalTear.svelte";
    import Syringe from "$lib/svg/Syringe.svelte";
    import Vr from "$lib/svg/Vr.svelte";
    import type { Component } from "svelte";
    import type { PostPath } from "$lib/types";

    const icons: Record<string, Component> = {
        Amd,
        Iol,
        RetinalTear,
        Syringe,
        Vr,
    };

    let { post, iconWidth = "1.5rem" }: { post: PostPath; iconWidth?: string } = $props();

    const {
        meta: { icon, brief },
        path,
    } = post;

    let Icon = icons[icon];
</script>

<a href={path} class="flex rounded-md p-4 hover:bg-gray-1">
    <div class="flex flex-col content-center justify-center text-blue-8">
        <Icon width={iconWidth} />
    </div>
    <div class="ml-2 flex w-full flex-col">
        <h3 class="font-semibold">{brief}</h3>
    </div>
</a>
