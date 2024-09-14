import { Link } from "react-router-dom";
import { SectionPropType } from "./_utils";
import useFetchBlogs from "../_hooks/useFetchBlogs";

function Blog(prop: SectionPropType) {
    const { nodeRef } = prop;

    const { data, error, loading } = useFetchBlogs("mine");
    return (
        <div className="blog section" id="blog" ref={nodeRef}>
            <h1>Blog.</h1>
            {error && <>{error}</>}
            {loading && <>loading</>}
            {data?.myBlogsMetaData?.map((metaData, index) => {
                const parsedName = metaData[0].replace(/-/g, '--').replace(/ /g, '-');
                return (
                    <div className='blog-post' key={index}>
                        <p>{metaData[3]}</p>
                        <Link to={`blog/${parsedName}`}>{metaData[0]}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Blog;