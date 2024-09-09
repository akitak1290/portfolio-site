
// mock db/cms/backend
// TODO: update after backend is done

export interface BlogPostDataType {
    id: string,
    title: string,
    date: string,
    tags: string[],
    content: string[]
}

interface BlogPostType {
    data: BlogPostDataType
}

interface mockReturnType {
    ok: boolean,
    json: () => Promise<BlogPostType>
}

const mockReturn: mockReturnType = {
    ok: true,
    json(): Promise<BlogPostType> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, _) => {
            resolve({
                data: {
                    id: "1",
                    date: "Feb 03, 2024",
                    title: "Justo lorem leo amet donec at ornare",
                    tags: ["firebase", "js", "nextjs", "ssr"],
                    content: ["Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient purus donec dictumst vitae massa eget odio fusce."]
                }
            });
        });
    }
}

async function mockFetchBlogs(): Promise<mockReturnType> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, _) => resolve(mockReturn));
}

export default mockFetchBlogs;