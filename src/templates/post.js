// import React from "react"
// import { graphql } from "gatsby"
// import Navigation from '../components/navigation/navigation'
// import Seo from '../components/seo'
// import Footer from '../components/navigation/footer'
// import ContentColumn from '../components/contentColumn'


// export default function Template({
//   data, 
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html, excerpt } = markdownRemark
//   return (
//     <>
//     <Seo image={frontmatter.image} title={frontmatter.title} article={true} description={excerpt} />
      
//     <Navigation />
    
//     <ContentColumn shorterColumn={true}>
//       <div className="container">
//           <h1 className="text-4xl font-bold xs:text-2xl leading-tight text-gray-500 pb-4" >{frontmatter.title}</h1>
//           {/* <h4 className="text-sm italic xs:text-2xl leading-tight text-gray-500 pb-4">{frontmatter.date}</h4> */}
//           <img src={frontmatter.image} alt={frontmatter.title} className="mb-4"  />
//           <div
//             className="text-2xl text-gray-500 pb-4 markdown"
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </div>
//         <hr />
      
//       </ContentColumn>
//       <Footer />
//     </>
//   )
// }
// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       excerpt
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//         image
//       }
//     }
//   }
// `