import PostList from "./PostList";


const Posts = ({ data }) => {
    const posts ={data};
    return (
        <>
        <div className="postList-heading">
            <h2>All Post</h2>
        </div>
        <div>
            <PostList posts={data}/>
        </div>
        </>
    );
};

export default Posts;