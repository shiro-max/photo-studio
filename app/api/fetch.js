import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_CATEGORIES, GET_HERO_SECTION, GET_NAVIGATION_LINKS, GET_POST, GET_POSTS } from "./queries/queries";

//get Nav Links

export async function getNavBar() {
    const client = new ApolloClient({
        uri : process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    try {
        const { data } = await client.query({
            query: GET_NAVIGATION_LINKS
        });
        const navLinks = await data?.navigation;
        return navLinks;
        
    } catch (error) {
        console.error("Error fetching hero section:", error);
        return [];
    }
}

//get Hero section

export async function getHeroSection() {
    const client = new ApolloClient({
        uri : process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    try {
        const { data } = await client.query({
            query: GET_HERO_SECTION
        });
        const heroSection = await data?.homePage?.heroSection[0];
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
        return data;
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
        console.log(data);
        return data.post;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

// get all categories

export async function getCategories(){
    const client = new ApolloClient({
        uri: process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    try {
        const { data } = await client.query({
            query: GET_CATEGORIES
        });
        return data?.menu?.categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return { success: false, error: error.message };
    }
}