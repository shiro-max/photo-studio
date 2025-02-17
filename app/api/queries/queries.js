import { gql } from '@apollo/client';

// Get Navigation Links 

const GET_NAVIGATION_LINKS = gql`
query GetNavLinks {
    navigation {
        logo {
            image {
                alternativeText
                url
            }
        }
    Link {
        ... on ComponentLinksLink {
            name
            path
            }
        }
    }
}
`

export { GET_NAVIGATION_LINKS }

// Get Hero Section qureies from strapi graphql

const GET_HERO_SECTION = gql`
query GetHeroSection {
    homePage {
        heroSection {
        ... on ComponentBlocksHeroSection {
            heading
            description
            image {
                alternativeText
                url
            }
            cta {
                name
                path
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
query GetSinglePost($documentId: ID!) {
        post(documentId: $documentId) {
        documentId
        title
        description
        body
        image {
            name
            alternativeText
            documentId
            url
            }
        updatedAt
    }
}
`

export { GET_POST }


// get categories

const GET_CATEGORIES = gql`
query GetCategories {
    menu {
        categories {
                name
                path
                documentId
                posts {
                        title
                        body
                        author
                        documentId
                        description
                        image {
                            alternativeText
                            url
                            documentId
                            }
                        categories {
                            documentId
                            name
                            path
                            }
                }
        }
    }
}
`

export { GET_CATEGORIES }