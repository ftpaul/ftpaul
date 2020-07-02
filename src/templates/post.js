import React from "react"
import { graphql } from "gatsby"
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'


export default function Template({
  data, 
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <SEO />
      
    <Navigation />
    
    <ContentColumn>
      <div className="container">
          <h1 className="text-3xl xs:text-2xl leading-tight text-gray-500 pb-4" >{frontmatter.title}</h1>
          {/* <h4 className="text-sm italic xs:text-2xl leading-tight text-gray-500 pb-4">{frontmatter.date}</h4> */}
          <div
            className="text-2xl text-gray-500 pb-4 mardown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      
      </ContentColumn>
      <Footer />
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`