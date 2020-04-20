/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const resumeJson = require('./src/data/resume.json');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/images/`, 
        quality: 100, 
        loading: `lazy` 
      } 
    },
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: { resumeJson }
      },
    },
  ]
}
