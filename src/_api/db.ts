
// mock db/cms/backend
// this is not an abstraction layer, useFetchBlogs is the only layer
// TODO: update after backend is done

export interface BlogPostDataType {
    myBlogs?: string[],
    highlightBlogs?: string[]
    myBlogsMetaData?: string[][],
    highLightBlogsMetaData?: string[][]
}

interface BlogPostType {
    data: BlogPostDataType
}

interface mockReturnType {
    ok: boolean,
    json: () => Promise<BlogPostType>
}

import myBlog1 from '../assets/blogs/blog1.md';
import highlightBlog1 from '../assets/highlight_blogs/blog1.md';
import { BlogType } from '../_hooks/useFetchBlogs';

// TODO: refactor this protocol design, the flow of this module for now is not really clear
// on first read.

let myBlogs = [myBlog1];
let parsed = parseMarkdown(myBlogs);
const myBlogsMetaData = parsed.metaData;
myBlogs = parsed.data;

let highlightBlogs = [highlightBlog1];
parsed = parseMarkdown(highlightBlogs);
const highlightBlogsMetaData = parsed.metaData;
highlightBlogs = parsed.data;

function parseMarkdown(blogs: string[]) {
    const metaData: string[][] = [];
    const parsedBlogs = blogs.map(blog => {
        // TODO: this only handles newline of window, make
        // a more general approach
        const lines: string[] = blog.split('\r\n');
        // remove the meta data lines
        metaData.push(lines.splice(0, 4));
        return lines.reduce((acc, cur) => acc += cur + '\n', "");
    });

    return {
        "metaData": metaData,
        "data": parsedBlogs
    }
}

export async function mockFetchBlogs(type?: BlogType): Promise<mockReturnType> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, _) => {
        resolve({
            ok: true,
            json(): Promise<BlogPostType> {
                return new Promise((resolve, reject) => {
                    if (!type)
                        resolve({
                            "data": {
                                "myBlogs": myBlogs,
                                "highlightBlogs": highlightBlogs,
                                "myBlogsMetaData": myBlogsMetaData,
                                "highLightBlogsMetaData": highlightBlogsMetaData
                            }
                        });

                    if (type == "highlight")
                        resolve({
                            "data": {
                                "highlightBlogs": highlightBlogs,
                                "highLightBlogsMetaData": highlightBlogsMetaData
                            }
                        });

                    if (type == "mine")
                        resolve({
                            "data": {
                                "myBlogs": myBlogs,
                                "myBlogsMetaData": myBlogsMetaData
                            }
                        })

                    // unreachable
                    reject();
                });
            }
        })
    });
}

export async function mockFetchBlog(type: BlogType, name: string): Promise<mockReturnType> {
    return new Promise((resolve, reject) => {

        let index: number;
        switch (type) {
            case "highlight":
                index = highlightBlogsMetaData.findIndex(metaData => metaData[0] == name);
                break;
            case "mine":
                index = myBlogsMetaData.findIndex(metaData => metaData[0] == name);
                break;
            default:
                index = -1;
        }
        if (index < 0) reject(`Failed to find blog post with name ${name}`);

        resolve({
            ok: true,
            json(): Promise<BlogPostType> {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                return new Promise((resolve, _) => {
                    if (type == "highlight") {
                        resolve({
                            "data": {
                                "highlightBlogs": [highlightBlogs[index]],
                                "highLightBlogsMetaData": [highlightBlogsMetaData[index]]
                            }
                        });
                    }

                    if (type == "mine")
                        resolve({
                            "data": {
                                "myBlogs": [myBlogs[index]],
                                "myBlogsMetaData": [myBlogsMetaData[index]]
                            }
                        })

                });
            }
        })
    });
}