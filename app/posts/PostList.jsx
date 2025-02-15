import Image from "next/image";
import Link from "next/link";

const PostList = ( { posts,title }) => {

    
    const BASE_URL = process.env.STRAPI_IMG_ENDPOINT
    

    return (
        <div>
            <main>
                <h2 className="post-title">{title}</h2>
            {posts  && posts.map((post)=>(
                <div key={post.documentId} className="post-card">
                    <h2 className="post-header">{post.title}</h2>
                    <p className="post-description">{post.description}</p>
                    <div className="read-more">
                    <Link  href={`/posts/${post.documentId}`}>Read More...</Link>
                    </div>
                    
                    <Image 
                        className="postList-image"
                        src={`${BASE_URL}${post.image[0].url}`} 
                        alt={post.image.alternativeText  || "Post image"}
                        width={400}
                        height={400}
                        priority={true}
                        />
                </div>
            ))}
            </main>
        </div>
    )
}

export default PostList