<script lang="ts">
    import Amd from "$lib/svg/Amd.svelte";
    import Eye from "$lib/svg/Eye.svelte";
    import Iol from "$lib/svg/Iol.svelte";
    import RetinalTear from "$lib/svg/RetinalTear.svelte";
    import Syringe from "$lib/svg/Syringe.svelte";
    import Vr from "$lib/svg/Vr.svelte";
    import type { Component } from "svelte";
    import type { PostPath } from "$lib/types";

    const icons: Record<string, Component> = {
        Amd,
        Eye,
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

<a href={path}>
    <div class="icon">
        <Icon width={iconWidth} />
    </div>
    <div class="brief">
        <h3>{brief}</h3>
    </div>
</a>

<style>
    .brief {
        display: flex;
        flex-direction: column;

        width: 100%;

        h3 {
            font-weight: var(--fw-semibold);
        }
    }

    .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        color: var(--blue-8);
    }

    a {
        display: flex;
        gap: var(--space-2);

        border-radius: var(--radius-md);
        padding-block: var(--space-2);

        &:hover {
            background-color: var(--gray-1);
        }
    }
</style>
