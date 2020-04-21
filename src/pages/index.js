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
    <p>I've been working on digital business for more than 5 years. Currently, I work at <a href="https://unbabel.com">Unbabel</a>.</p>
    <p> Thinking is something we are not able to do alone, that's why I like to collaborate with different people to reach the best solutions.</p>
    <p>Feel free to reach me out if you need help thinking by <a href="mailto:ftpaul+web@gmail.com">email</a> or on <a href="https://www.linkedin.com/in/ftpaul/">LinkedIn</a>.</p>
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