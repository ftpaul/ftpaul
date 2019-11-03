import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
  <>
  <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

  <Layout>
    <div class="container-image">
    <img src="http://placekitten.com/250/250" />
    </div>
    <div class="container-text">
    <h1>Paulo Teixeira</h1>
    <p>I've been working on digital business for more than 5 years. Currently, I work at <u>Unbabel</u>. Thinking is something we are not able to do alone, that's why I like to collaborate with different people to reach the best solutions.</p>
    </div>
  </Layout>
  </>
)
