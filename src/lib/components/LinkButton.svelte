<script lang="ts">
    import type { Link } from "$lib/types";

    let { link, iconWidth = "1.5rem" }: { link: Link; iconWidth?: string } = $props();
    const { buttonText, href, Icon } = link;
</script>

<!-- todo: link styles -->
<a {href} class="button">
    <div class="icon">
        <Icon width={iconWidth} />
    </div>
    <div class="button-text">{buttonText}</div>
</a>

<style>
    .button-text {
        font-weight: var(--fw-medium);
    }
</style>
