import { gql } from '@apollo/client';

// Get Hero Section qureies from strapi graphql

const GET_HERO_SECTION = gql`
query GetHeroSection {
    homePage {
        blocks {
            ... on ComponentBlocksHeroSection {
                id
                heading
                description
                image {
                    name
                    alternativeText
                    url
                }
                cta {
                    href
                    isExternal
                    text
                }
            }
        }
    }
}
    `

export { GET_HERO_SECTION }



// Get all posts qureies from strapi graphql

const GET_POSTS = gql`
query GetPosts {
    posts {
        documentId
        title
        description
        image {
            url
            documentId
            name
            alternativeText
        }
    }
}
`

export { GET_POSTS }


// Get single post by documentId qureies from strapi graphql

const GET_POST = gql`
query Query($documentId: ID!) {
    post(documentId: $documentId) {
        documentId
        title
        description
        like
        updatedAt

        image {
            name
            alternativeText
            documentId
            url
            }

    }
}
`

export { GET_POST }