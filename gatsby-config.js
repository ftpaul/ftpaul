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
    `react-simple-chatbot`,
    { resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/assets/images/`, 
        // quality: 100, 
        // loading: `lazy`  
      } 
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`, `800`, `900`]
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
    {
      resolve: `gatsby-source-pocket`,
      options: {
        consumerKey: `92512-8ff61a3de059f2bbd382f7b5`,
        accessToken: `2b8a4ad7-69dc-0719-09fb-7a6a9a`,
        weeksOfHistory: 300,
        apiMaxRecordsToReturn: 10000,
        getCurrentWeekOnly: `n`,
        tagFilter: true,
        stateFilterString: `all`,
      }
    },
  ]
}
