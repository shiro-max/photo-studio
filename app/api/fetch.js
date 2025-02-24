import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_HOME, GET_POST } from "./queries/queries";


//get Home Page {Navigations,HeroSection,Categories-Menu,Blog Info}

export async function getHomePage() {
    const client = new ApolloClient({
        uri : process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    try {
        const { data } = await client.query({
            query: GET_HOME 
        });
        const heroSection = await data;
        return heroSection;
        
    } catch (error) {
        console.error("Error fetching hero section:", error);
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

