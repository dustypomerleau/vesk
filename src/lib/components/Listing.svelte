<script lang="ts">
    export let post: Post;
    const {
        path,
        meta: { author, creds, icon, title }
    } = post;

    import Amd from "$lib/svg/Amd.svelte";
    import Eye from "$lib/svg/Eye.svelte";
    import Iol from "$lib/svg/Iol.svelte";
    import Retina from "$lib/svg/Retina.svelte";
    import Syringe from "$lib/svg/Syringe.svelte";
    import Vr from "$lib/svg/Vr.svelte";

    const icons = { Amd, Eye, Iol, Syringe, Retina, Vr };
</script>

<!-- also decide on hover effect -->
<a href={path} class="listhover flex p-4">
    <div class="flex flex-col content-center justify-center text-blue-700">
        <svelte:component this={icons[icon]} />
    </div>
    <div class="ml-2 flex w-full flex-col">
        <h3 class="font-semibold">{title}</h3>
        <!-- <div class="my-2 w-5/6 border-b-2 border-gray-300" /> -->
        <!-- <div class="flex flex-wrap items-baseline">
            <div class="mr-2">{author}</div>
            <div class="text-sm text-gray-500">{creds}</div>
        </div> -->
    </div>
</a>
