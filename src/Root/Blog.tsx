import { Link } from "react-router-dom";
import { SectionPropType } from "./_utils";

function Blog(prop: SectionPropType) {
    const { nodeRef } = prop;

    return (
        <div className="blog section" id="blog" ref={nodeRef}>
            <h1>Blog.</h1>
            {[0].map((_, index) => {
                return (
                    <div className='blog-post' key={index}>
                        <p>Sep 12, 2024</p>
                        <Link to={`blog/${index}`}>A collection of interesting articles, books, and others.</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Blog;