exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/post/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/writing`+node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}


// // moment.js comes with gatsby
// const moment = require('moment');

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   // https://stackoverflow.com/questions/54473828/how-to-query-date-range-in-gatsby-graphql
//   if (node.internal.type === `PocketArticle`) {
//     //const time_updated = node.time_updated
//     const time_read = node.time_read
//     //const readDay = node.readDay
//     const time_added = node.time_added

   
//     // createNodeField({
//     //   node,
//     //   name: 'time_updated',
//     //   value: moment.unix(time_updated).format(),
//     // })

//     // createNodeField({
//     //   node,
//     //   name: 'time_read',
//     //   value: moment.unix(time_read).format(),
//     // })

//     createNodeField({
//       node,
//       name: 'month_read',
//       value: moment.unix(time_read).format(`YYYY MM`),
//     })

//     // createNodeField({
//     //   node,
//     //   name: 'readDay',
//     //   value: moment.unix(readDay).format(),
//     // })

//     createNodeField({
//       node,
//       name: 'month_added',
//       value: moment.unix(time_added).format(`YYYY MM`),
//     })

//   }
// }