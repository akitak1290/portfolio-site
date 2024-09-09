
// interface PropType {
//     title: string,
//     tags: string[],
//     data: {
//         [sections:]
//     }
// }

import useFetchBlog from "../_hooks/useFetchBlogs";

function BlogPost() {
    const { data, error, loading } = useFetchBlog("asd");

    if (error) return <>error</>
    if (loading) return <>loading</>

    return (
        <div className="blog-post">
            <h1>{data?.title}</h1>
            
        </div>
    );
}

export default BlogPost;