<script lang="ts">
    import type { NavContainerProps } from "$lib/types";

    let { children, fluid, class: clasName, ...restProps }: NavContainerProps = $props();
</script>

<!-- todo: this probably can just be moved inside its parent, and the component deleted -->
<div {...restProps} class="navbar-container">
    {@render children?.()}
</div>

<style>
    .navbar-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>
