/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Paulo Teixeira · Product Manager | Product Owner",
    titleTemplate: "%s ·",
    description:
      "A Product Manager with 6+ years of experience working with web technologies.",
    url: "https://pauloteixeira.pt", // No trailing slash allowed!
    image: "/paulo-teixeira-sharing-image.png", // Path to your image you placed in the 'static' folder
    favicon: "/favicon.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@iamftpaul",
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    { resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/images/`, 
        quality: 100, 
        loading: `lazy` 
      } 
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-goodreads",
    //   options: {
    //     developerKey: "K5MS7p74EdlcKjCIEcILag",
    //     goodReadsUserId: "63617698",
    //     userShelves: ["currently-reading", "read"]
    //   }
    // },
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
          key: 'K5MS7p74EdlcKjCIEcILag',
          id: '63617698'
      },
    },
  ]
}
