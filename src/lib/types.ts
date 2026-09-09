import type { Component } from "svelte";

export interface Card {
    title: string;
    points: Array<string>;
    link: Link;
}

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

export interface Link {
    href: string;
    Icon: Component;
    buttonText: string;
}

export interface PhotoFig extends Figure {
    image: string;
    alt: string;
}

export interface PostContent {
    meta: PostMetadata;
    Content: Component;
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

export interface PostPath {
    meta: PostMetadata;
    path: string;
}

export interface Posts {
    posts: Array<PostPath>;
}

export enum PostType {
    Blog,
    Condition,
    Treatment,
}

export interface RadioProps {
    Icon: Component;
    name: string;
    text?: string;
    iconWidth?: string;
}

export interface SvgFig extends Figure {
    Svg: Component;
    viewBox?: string;
    width?: string;
}

// types from Flowbite for the Nav:

import type { Snippet } from "svelte";

import type {
    // ClassValue,
    HTMLAnchorAttributes,
    HTMLAttributes,
    // HTMLBlockquoteAttributes,
    HTMLButtonAttributes,
    // HTMLDialogAttributes,
    // HTMLImgAttributes,
    // HTMLInputAttributes,
    // HTMLLabelAttributes,
    // HTMLLiAttributes,
    // HTMLOlAttributes,
    // HTMLSelectAttributes,
    // HTMLSourceAttributes,
    // HTMLTableAttributes,
    // HTMLTdAttributes,
    // HTMLTextareaAttributes,
    // HTMLThAttributes,
    // HTMLTrackAttributes,
    // HTMLVideoAttributes,
    // SVGAttributes,
    // FullAutoFill,
} from "svelte/elements";

export type AnchorButtonAttributes =
    | ({ href: string } & HTMLAnchorAttributes)
    | ({ href?: undefined } & HTMLButtonAttributes);

export type NavHamburgerProps = { name?: string };

export type NavbarState = {
    hidden: boolean;
    activeClass?: string;
    nonActiveClass?: string;
    activeUrl?: string;
};

export type NavbarBreakpoint = "sm" | "md" | "lg" | "xl";

export interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    children: Snippet<[{ hidden: boolean; toggle: () => void }]>;
}
