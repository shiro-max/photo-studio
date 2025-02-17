import { getPost } from "@/app/api/fetch";
import Image from "next/image";



const PostDetail = async ({ params }) => {
    const { id } = await params;

    //fetch data from api
    const post = await getPost(id);

    // base url for image
    const BASE_URL = process.env.STRAPI_IMG_ENDPOINT
    console.log(post);

    
    return (
        <div className="post-detail">
            <h2>{post?.title}</h2>
            <small>{post?.description}</small>
            <Image
                className="post-image"
                src={`${BASE_URL}${post?.image?.url}`}
                alt={post.image.alternativeText || "Post image"}
                width={400}
                height={400}
                priority={true}
            />
            <p style={{lineHeight: "2"}}>{post?.body}</p>
        </div>
    );
};

export default PostDetail;
