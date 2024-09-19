import { useState, useEffect } from "react";
import { mockFetchBlog, mockFetchBlogs, BlogPostDataType } from "../_api/db";

// precondition: none...
// post-condition: either the fetch fails, or data is returned,
//                  or it waits until the http client
//                  closes the connections...
const useFetchBlogs = (type?: BlogType, name?: string) => {
    // need useState to trigger react's state change so
    // the return values are updated by react
    const [data, setData] = useState<BlogPostDataType>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true); // for after the first call to this function

                
                // const response = await fetch(url);
                let response;
                if (type && name) {
                    
                    const parsedName = name.replace(/(?<!-)-(?!-)/g, ' ').replace(/--/g, '-');
                    response = await mockFetchBlog(type, parsedName);
                } else if (type == undefined && name == undefined) {
                    response = await mockFetchBlogs();
                } else if (type && name == undefined) {
                    response = await mockFetchBlogs(type)
                } else {
                    // (!type && name)
                    throw new Error('Wrong argument list');
                }

                if (!response.ok) {
                    throw new Error('Network problem');
                }

                const result = await response.json();
                setData(result.data);
            } catch (error) {
                // catch both fetch and json errors
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, [type, name]);

    return { data, error, loading };
}

export type BlogType = "mine" | "highlight";

export default useFetchBlogs;