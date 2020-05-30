import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => { return (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>This is the best title I could find</title>
  </Helmet>

  <Layout>
    <div class="container-text">
    <h1 className="text-2xl text-gray-600">Work in progress <span role="img" aria-label="Man Technologist">👨🏻‍💻</span></h1>
    </div>
  </Layout>
  </>)
}

export const query = graphql`
{
  file(relativePath: {eq: "paulo-teixeira-square.jpg"}) {
    childImageSharp {
      fixed {
        src
      }
    }
  }
}
`

export default IndexPage