import useFetchBlogs from "../_hooks/useFetchBlogs";
import Markdown from 'react-markdown';
import { useParams, useNavigate } from "react-router-dom";

import { type Element } from 'hast';
import Error from "../_components/Error";

type SectionType = "experience" | "blog";

function BlogPost({ section }: { section: SectionType }) {
    const { name } = useParams();
    const {
        data,
        error,
        loading
    } = useFetchBlogs(
        section == "blog" ? "mine" : "highlight",
        name?.replace(/(?<!-)-(?!-)/g, ' '));
    const navigate = useNavigate();
    if (name == undefined) navigate("/");

    let blog = "";
    if (section == "experience" && data?.highlightBlogs) blog = data.highlightBlogs[0];
    if (section == "blog" && data?.myBlogs) blog = data.myBlogs[0];

    return (
        <div className="blog-post">
            {error && <Error />}
            {loading && <>loading</>}
            <Markdown
                components={{
                    p: ({ node, ...rest }) => {
                        if (!node) return;

                        // a temp fix for type problem with children
                        // TODO: review this
                        const firstChild = node.children[0] as unknown as Element;

                        if (firstChild.tagName == "a") {
                            const childTextElement = (node.children[0] as unknown as Element).children[0];
                            const link = (firstChild.properties.href ?? "/") as string;
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            return <a target="_blank" href={link}>{(childTextElement as unknown as any).value}</a>
                        }
                        else if (firstChild.tagName == "img") {
                            const src = (firstChild.properties.src ?? "#") as string;
                            const alt = (firstChild.properties.alt ?? "a very cool image") as string;
                            return (
                                <div className="blog-post-image-container" >
                                    <img src={src.slice(1)} alt={alt} />
                                </div>
                            );
                        }
                        else
                            return <p {...rest} />
                    },
                }}>
                {blog}
            </Markdown>
        </div>
    );
}

export default BlogPost;