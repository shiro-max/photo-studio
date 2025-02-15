import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_HERO_SECTION, GET_POST, GET_POSTS } from "./queries/queries";

//get Hero Section Pages

export async function getHeroSection() {
    const client = new ApolloClient({
        uri : process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    try {
        const { data } = await client.query({
            query: GET_HERO_SECTION
        });
        const heroSection = await data?.homePage?.blocks[0];
        return heroSection;
        
    } catch (error) {
        console.error("Error fetching hero section:", error);
        return [];
    }
}


// get all posts

export async function getPosts() {
    const client = new ApolloClient({
        uri: process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });

    try {
        const { data } = await client.query({
            query: GET_POSTS
        });
        return data.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

// get single post by documentId

export async function getPost(documentId) {
    const client = new ApolloClient({
        uri: process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });

    try {
        const { data } = await client.query({
            query: GET_POST,
            variables: { documentId }
        });
        return data.post;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}