/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Paulo Teixeira · Product Manager · ftpaul.io",
    titleTemplate: "%s · ftpaul.io",
    description:
      "A Product Manager with a solid background in product, marketing, and management. Impacting digital products since 2013.",
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
      } 
    },
    { resolve: `gatsby-source-filesystem`, 
      options: { 
        name: `documents`,
        path: `./src/assets/documents/`,   
      } 
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Lato`,
              variants: [`300`, `400`, `700`, `800`, `900`],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
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
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5TMGM88",
        includeInDevelopment: false,
      }
    },
  ]
}
