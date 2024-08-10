import type { Component } from "svelte";

export interface Doc {
    name: string;
    credentials: string;
    specialties: string;
    bio: Array<string>;
    image: string;
    alt: string;
}

export interface Figure {
    size?: string;
    width?: string;
    caption?: string;
    textSize?: string;
    textColor?: string;
}

export interface PhotoFig extends Figure {
    image: string;
    alt: string;
}

export interface SvgFig extends Figure {
    svg: Component;
    viewBox?: string;
}

export interface Link {
    href: string;
    // see https://github.com/sveltejs/language-tools/issues/486
    // see https://github.com/zerodevx/svelte-toast/pull/30
    icon: Component;
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
    Content: Component;
}

export interface PostPath {
    meta: PostMetadata;
    path: string;
}
