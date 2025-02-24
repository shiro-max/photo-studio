'use client';
import { createContext, useEffect, useState } from "react";
import PostList from "./PostList";

export const PostContext = createContext();

const Posts = ({ data }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data)
    }, []);

    return (
        < >
            <div className="postList-heading">
                <h2>All Post</h2>
            </div>
            <PostContext.Provider value={posts}>
                <PostList />
            </PostContext.Provider>
        </>
    );
};

export default Posts;