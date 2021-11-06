/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 require("dotenv").config({
  //path: `.env.${process.env.NODE_ENV}`,
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Paulo Teixeira · Product Manager · ftpaul.io",
    titleTemplate: "%s · ftpaul.io",
    description:
      "A Product Manager with a solid background in product, marketing, and management. Impacting digital products since 2013.",
    url: "https://ftpaul.io", // No trailing slash allowed!
    image: "/ftpaul-sharing-image.jpg", // Path to your image you placed in the 'static' folder
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
        path: `${__dirname}/src/assets/images/`, 
      } 
    },
    { resolve: `gatsby-source-filesystem`, 
      options: { 
        name: `documents`,
        path: `${__dirname}/src/assets/documents/`,   
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
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1QoXx6GAhOLC7Iq0zB0eL4B69eTIiwmy707YnktL2LUw',
        // credentials: require('./ftpaulio-backlog-3a40b446015c.json')
        credentials: {
          type: 'service_account',
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
          client_email: process.env.CLIENT_EMAIL,
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      }
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
