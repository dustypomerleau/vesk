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
    size: "small" | "medium" | "large";
    caption?: string;
}

export interface PhotoFig extends Figure {
    image: string;
    alt: string;
}

export interface SvgFig extends Figure {
    Svg: Component;
    viewBox?: string;
    width?: string;
}

export interface Link {
    href: string;
    Icon: Component;
    buttonText: string;
}

export interface Card {
    title: string;
    points: Array<string>;
    link: Link;
}

export interface PostMetadata {
    author: string;
    brief: string;
    creds: string;
    date: Date;
    icon: string;
    image: string;
    title: string;
}

export interface PostContent {
    meta: PostMetadata;
    Content: Component;
}

export interface PostPath {
    meta: PostMetadata;
    path: string;
}
