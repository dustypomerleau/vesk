import type {
    ComponentType,
    SvelteComponent,
    SvelteComponentTyped
} from "svelte";

export interface Doc {
    name: string;
    credentials: string;
    specialties: string;
    bio: Array<string>;
    image: string;
    alt: string;
}

export interface Figure {
    image: string;
    alt: string;
    caption: string;
}

export interface SvgFigure {
    svg: typeof SvelteComponent;
    caption: string;
}

export interface Link {
    href: string;
    // see https://github.com/sveltejs/language-tools/issues/486
    // see https://github.com/zerodevx/svelte-toast/pull/30
    icon: typeof SvelteComponent;
    buttonText: string;
}

export interface Card {
    title: string;
    points: Array<string>;
    link: Link;
}

export interface PostMetadata {
    author: string;
    image: string;
    creds: string;
    icon: string;
    brief: string;
    title: string;
    date: Date;
}

export interface PostContent {
    meta: PostMetadata;
    // not really clear why this doesn't throw an error, but icon on Link does.
    Content: ComponentType<SvelteComponentTyped>;
}

export interface PostPath {
    meta: PostMetadata;
    path: string;
}
