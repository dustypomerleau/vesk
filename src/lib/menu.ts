export function mounted(_: HTMLElement, fn: (_: boolean) => void) {
    // This is necessary to ensure that the menu-background height
    // is applied without an animation.
    setTimeout(() => {
        fn(true);
    });

    return {
        destroy() {
            fn(false);
        },
    };
}

export function click_outside(node: HTMLElement, callback: () => void) {
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

export function focus_outside(node: HTMLElement, callback: () => void) {
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

function focusable_children(node: HTMLElement) {
    const nodes: Array<HTMLElement> = Array.from(
        node.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        ),
    );

    const index = nodes.indexOf(document.activeElement! as HTMLElement);

    const update = (d: number) => {
        let i = index + d;
        i += nodes.length;
        i %= nodes.length;

        nodes[i].focus();
    };

    const reordered = [...nodes.slice(index + 1), ...nodes.slice(0, index + 1)];

    const next = (selector?: string) => {
        for (let i = 0; i < reordered.length; i += 1) {
            if (!selector || reordered[i].matches(selector)) {
                reordered[i].focus();
                return;
            }
        }
    };

    const prev = (selector?: string) => {
        for (let i = reordered.length - 2; i >= 0; i -= 1) {
            if (!selector || reordered[i].matches(selector)) {
                reordered[i].focus();
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

export const transitionstart = (e: Event) => {
    const target = e.target;

    if (!(target as HTMLElement)?.classList.contains("viewport")) return;
    if (e.propertyName !== "transform") return;

    // we need to apply a clip-path during the transition so that the contents
    // are constrained to the menu background, but only while the transition
    // is running, otherwise it prevents the contents from being scrolled
    const a = "calc(var(--height-difference) + 1px)";
    const b = "1px";

    const start = $show_context_menu ? a : b;
    const end = $show_context_menu ? b : a;

    const container = e.currentTarget;

    container.style.clipPath = `polygon(0% ${start}, 100% ${start}, 100% 100%, 0% 100%)`;

    setTimeout(() => {
        container.style.clipPath = `polygon(0% ${end}, 100% ${end}, 100% 100%, 0% 100%)`;
    }, 0);
};
