import { getPosts } from "../api/fetch";
import PostList from "./PostList";


const Posts = async () => {
    const posts = await getPosts();
    return (
        <main>
            <PostList posts={posts} title="All Posts"/>
        </main>
    );
};

export default Posts;