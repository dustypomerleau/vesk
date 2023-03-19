<!-- let componentContructorName = 'testComponent';
$: componentConstructorClass = (() => switch(componentConstructorName) {
     case 'testComponent': return TestComponent;
     case 'testComponent2': return TestComponent2;
     default: someDefaultComponent;
})();

OR

<script>
    import CompOne from './CompOne.svelte';
    import CompTwo from './CompTwo.svelte';
    import CompThree from './CompThree.svelte';


    const components = { CompOne, CompTwo, CompThree }
    let compConstrName = "CompOne";
  </script>

  <svelte:component this={components[compConstrName]} />

todo: template for each listing in overview screen of patient info sheets
-->
<script lang="ts">
    export let post;
    const {
        path,
        meta: { author, creds, icon, title }
    } = post;

    import Eye from "$lib/svg/Eye.svelte";
    import Print from "$lib/svg/Print.svelte";
    import Pin from "$lib/svg/Pin.svelte";

    const icons = { Eye, Print, Pin };
</script>

<a href={path} class="m-4 my-12 ml-2 flex first:mt-6 last:mb-2">
    <div class="pt-[0.1rem] text-blue-700">
        <svelte:component this={icons[icon]} />
    </div>
    <div class="ml-2 flex w-full flex-col">
        <h3 class="font-semibold">{title}</h3>
        <div class="my-2 w-5/6 border-b-2 border-gray-300" />
        <div class="flex flex-wrap items-baseline">
            <div class="mr-2">{author}</div>
            <div class="text-sm text-gray-500">{creds}</div>
        </div>
    </div>
</a>
