
import { getPost } from "@/app/api/fetch";
import Image from "next/image";
import Link from "next/link";



const PostDetail = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    //fetch data from api
    const post = await getPost(id);
    console.log(post)
    // base url for image
    

    const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_IMG_ENDPOINT

    return (
        <>
            <div className="btn">
                <Link href={'/'}>
                    <svg className="arrow-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
            {post && <div className="post-detail">
                <h2>{post?.title}</h2>
                <small>{post?.description}</small>
                <Image
                    className="post-image"
                    src={`${BASE_URL}${post?.image?.url}` || '/public/placeholder.jpg'}
                    alt={post.image.alternativeText || "Post image"}
                    width={400}
                    height={400}
                    priority={true}
                />
                <p style={{ lineHeight: "2" }}>{post?.body}</p>
            </div>}
        </>
    );
};

export default PostDetail;
