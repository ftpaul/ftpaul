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
    <div class="container-image">
    <img
        className="headshot"
        src={data.file.childImageSharp.fixed.src}
        alt="Paulo Teixeira"
      />
    </div>
    <div class="container-text">
    <h1>Paulo Teixeira</h1>
    <p>Driven by outstanding experiences and meaningful collaborations, I am a Product Manager with a dynamic background as developer and marketer. I have 5+ years of experience working in high-growth tech organizations.</p>
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