<script context="module" lang="ts">
    import { writable } from "svelte/store";

    const open_store = writable(false);
</script>

<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { tick } from "svelte";

    export let open: boolean;

    $: $open_store = open;

    let menu_button: HTMLButtonElement;

    function mounted(_: HTMLElement, fn: (_: boolean) => void) {
        // this is necessary to ensure that the menu-background height
        // is applied without an animation
        setTimeout(() => {
            fn(true);
        });

        return {
            destroy() {
                fn(false);
            },
        };
    }

    function close() {
        open = false;
        $open_store = open;
    }

    afterNavigate(close);

    // todo: move these event handlers to a separate module and import
    function click_outside(node: HTMLElement, callback: () => void) {
        const handleClick = async (e: MouseEvent) => {
            if (!node.contains(e.target as Node)) callback();
        };

        document.addEventListener("click", handleClick, true);

        return {
            destroy() {
                document.removeEventListener("click", handleClick, true);
            },
        };
    }

    function focus_outside(node: HTMLElement, callback: () => void) {
        function handleFocus(e: FocusEvent) {
            if (!node.contains(e.target as Node)) callback();
        }

        document.addEventListener("focus", handleFocus, true);

        return {
            destroy() {
                document.removeEventListener("focus", handleFocus, true);
            },
        };
    }

    export function focusable_children(node: HTMLElement) {
        // We use `Element` here, rather than `HTMLElement`, because `document.activeElement`
        // returns `Element` when we assign `index`. We can then cast back to `HTMLElement`
        // for the sake of calling `focus()`.
        const nodes: Array<Element> = Array.from(
            node.querySelectorAll(
                'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
            ),
        );

        const index = nodes.indexOf(document.activeElement!);

        const update = (d: number) => {
            let i = index + d;
            i += nodes.length;
            i %= nodes.length;

            (nodes[i] as HTMLElement).focus();
        };

        const reordered = [...nodes.slice(index + 1), ...nodes.slice(0, index + 1)];

        const next = (selector?: string) => {
            for (let i = 0; i < reordered.length; i += 1) {
                if (!selector || reordered[i].matches(selector)) {
                    (reordered[i] as HTMLElement).focus();
                    return;
                }
            }
        };

        const prev = (selector?: string) => {
            for (let i = reordered.length - 2; i >= 0; i -= 1) {
                if (!selector || reordered[i].matches(selector)) {
                    (reordered[i] as HTMLElement).focus();
                    return;
                }
            }
        };

        return { update, next, prev };
    }

    // if no second param is passed it defaults to `{}`
    // if a second param is passed without `reset_focus`, its value defaults to `true`
    export function trap(node: HTMLElement, { reset_focus = true } = {}) {
        const previous = document.activeElement;

        const handle_keydown = (e: KeyboardEvent) => {
            if (e.key === "Tab") {
                e.preventDefault();

                const group = focusable_children(node);
                if (e.shiftKey) {
                    group.prev();
                } else {
                    group.next();
                }
            }
        };

        node.addEventListener("keydown", handle_keydown);

        return {
            destroy: () => {
                node.removeEventListener("keydown", handle_keydown);
                if (reset_focus) {
                    (previous as HTMLElement)?.focus({ preventScroll: true });
                }
            },
        };
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.key === "Escape") {
            close();
            // we only manage focus when Esc is hit
            // otherwise, the navigation will reset focus
            tick().then(() => menu_button.focus());
        }
    }}
/>

<div></div>
