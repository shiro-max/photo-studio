import { gql } from '@apollo/client';

//get Home Page {Navigations,HeroSection,Categories-Menu,Blog Info}

const GET_HOME = gql`
query GetHomePage{
    posts {
            title
            description
            body
            author
            documentId
            image {
                    alternativeText
                    url
                }
        }
    homePage {
        Home {
        ... on ComponentBlocksNavBar {
            logo {
                image {
                    alternativeText
                    url
                    }
                }
            links {
                name
                path
                }
        }
        ... on ComponentBlocksHeroSection {
            description
            heading
            cta {
                name
                path
                }
            image {
                alternativeText
                url
                }
        }
        ... on ComponentBlocksMenu {
            categories {
                name
                path
                documentId
                posts {
                    title
                    description
                    body
                    author
                    documentId
                    image {
                        alternativeText
                        url
                    }
                categories {
                        name
                        path
                        documentId
                        posts {
                            title
                            description
                            body
                            author
                            documentId
                        image {
                            alternativeText
                            url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`

export { GET_HOME }




// Get single post by documentId qureies from strapi graphql

const GET_POST = gql`
query GetSinglePost($documentId: ID!) {
    post(documentId: $documentId) {
            documentId
            title
            description
            body
            author
            image {
                alternativeText
                url
                }
            categories {
                name
                path
                documentId
                }
    }
}
`

export { GET_POST }
