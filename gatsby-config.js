/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Paulo Teixeira · Product Manager  · ftpaul.io",
    titleTemplate: "%s ·",
    description:
      "A Product Manager with 6+ years of experience working with digital products.",
    url: "https://ftpaul.io", // No trailing slash allowed!
    image: "/ftpaul-sharing-image.png", // Path to your image you placed in the 'static' folder
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
        path: `./src/assets/images/`, 
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
          key: 'K5MS7p74EdlcKjCIEcILag',
          id: '63617698'
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5TMGM88",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      }
    },
  ]
}
