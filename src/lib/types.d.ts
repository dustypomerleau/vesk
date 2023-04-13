// can we make the types encompass the return from info/[slug]/+page.ts

// getPosts from utils returns an array of objects with meta: any, path: string, for each post
// GET to info/ calls getPosts(), sorts the returned array, and then calls json(), which returns a Response object as JSON
//
// so when we load /info it
// - calls load()
// - which calls fetch on the api, returning a Response
// - it then calls the json() method on the Response, returning the body as a JSON array containing all the posts
// - the post objects have meta and path, but don't contain the content of the post
// - the array of JSON post objects exists on the data prop as posts (data.posts)
// - so when data is passed to Info, it uses an #each to iterate through the data.posts array and create a Listing for each post (with the path used as href)
// when you click through to the slug for that article, it passes the metadata and the content as props on the data object, but not nested under meta as before - it's all just one level deep
// "the data from the load() function is automatically available to use as the data prop" - so this is a feature of sveltekit

interface PostMetadata {
    author: string;
    brief: string;
    creds: string;
    date: Date;
    icon?: string;
    image: string;
    title: string;
}

interface PostWithPath {
    meta: PostMetadata;
    path: string;
}

interface PostWithContent {
    meta: PostMetadata;
    Content: HTMLElement;
}

type Post = Post extends PostWithContent ? PostWithContent : PostWithPath;
