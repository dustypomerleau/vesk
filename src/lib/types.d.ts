interface PostMetadata {
    author: string;
    brief: string;
    creds: string;
    date: Date;
    icon: string;
    image: string;
    title: string;
}

interface PostContent {
    meta: PostMetadata;
    Content: HTMLElement;
}

interface PostPath {
    meta: PostMetadata;
    path: string;
}
