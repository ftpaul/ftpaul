import React from "react"
import { Link, graphql } from "gatsby"
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'


const WritingPage = ({ data }) => { return (
  <>
  <SEO />
    
  <Navigation />
  <ContentColumn shorterColumn={true}>
    

      {data.allMarkdownRemark.edges.map(article => (
        <div key={article.node.frontmatter.title} className="mt-6 mb-24">
          <Link to={`/writing`+article.node.frontmatter.slug}  className="text-gray-500 ">
            <h1 className="text-3xl xs:text-2xl leading-tight text-gray-500 pb-4 hover:text-yellow-600" >{article.node.frontmatter.title}</h1>
          </Link>
          {article.node.frontmatter.image && (
            <Link to={`/writing`+article.node.frontmatter.slug}  className="text-gray-500 ">
              <img src={article.node.frontmatter.image} alt={article.node.frontmatter.title} className="mb-4"  />
            </Link>)}
          <p className="text-base leading-tight text-gray-500 pb-4" >{article.node.excerpt}</p>
          <Link to={`/writing`+article.node.frontmatter.slug} className="text-yellow-600 underline hover:text-yellow-400 text-lg pb-4">Read article &rarr;</Link>
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
          image
        }
        excerpt
      }
    }
  }
}
`

export default WritingPage