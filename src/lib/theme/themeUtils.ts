import type { ThemeConfig } from "$lib/types";
import type { ClassValue } from "clsx";
import { getContext } from "svelte";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
    const theme = getContext<ThemeConfig>("theme");
    return theme?.[componentKey];
}

type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">;
export type Classes<T extends { slots: Record<string, unknown> }> = {
    classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};
