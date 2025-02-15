import { getPost } from "@/app/api/fetch";
import Image from "next/image";



const PostDetail = async ({ params }) => {
    const { id } = await params;

    //fetch data from api
    const post = await getPost(id);

    // base url for image
    const BASE_URL = process.env.STRAPI_IMG_ENDPOINT

    // image name
    const imageName = post.image[0]?.name
    
    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <small>{imageName}</small>
            <Image
                className="post-image"
                src={`${BASE_URL}${post.image[0].url}`}
                alt={post.image.alternativeText || "Post image"}
                width={400}
                height={400}
                priority={true}
            />
            <p>{post.description}</p>
        </div>
    );
};

export default PostDetail;
