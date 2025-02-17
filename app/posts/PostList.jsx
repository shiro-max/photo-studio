import Image from "next/image";
import Link from "next/link";

const PostList = ({ posts, title }) => {


    const BASE_URL = process.env.STRAPI_IMG_ENDPOINT


    return (
        <main>
            <h2 className="postList-heading">{title}</h2>
            <div className="post-list">
                {posts.posts && posts.posts.map((post) => (
                    <div key={post.documentId} className="post-card">
                        <Image
                            className="postList-image"
                            src={`${BASE_URL}${post.image.url}`}
                            alt={post.image.alternativeText || "Post image"}
                            width={400}
                            height={400}
                            priority={true}
                        />
                        <div className="p-5">
                            <h5 className="post-header">{post.title}</h5>
                        </div>
                        <p className="post-description">{post.description}</p>
                        <div className="read-more">
                            <Link href={`/posts/${post.documentId}`}>
                                Read More...
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </main>
    )
}

export default PostList