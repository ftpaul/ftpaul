import React from "react"
import { Link } from "gatsby"
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'
import Img from "gatsby-image"


const WritingPage = ({ data }) => { return (
  <>
  <SEO />
    
  <Navigation />
  <ContentColumn>
    

      {data.allMarkdownRemark.edges.map(article => (
        <div key={article.node.frontmatter.title} className="mt-12 mb-48">
          <Link to={article.node.frontmatter.slug}  className="text-gray-500 ">
            <h1 className="text-3xl xs:text-2xl leading-tight text-gray-500 pb-4 hover:text-yellow-600" >{article.node.frontmatter.title}</h1>
          </Link>
          <p className="text-base leading-tight text-gray-500 pb-4" >{article.node.excerpt}</p>
          <Link to={article.node.frontmatter.slug} className="text-gray-500 hover:text-yellow-600 pb-4">Read article &rarr;</Link>
        </div>
      ))}
      </ContentColumn>
      <Footer />
  </>
  )
}

export const query = graphql`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
    filter: {fileAbsolutePath: {regex: "/post/"}}
  ) {
    edges {
      node {
        frontmatter {
          slug
          title
        }
        excerpt
      }
    }
  }
}
`

export default WritingPage