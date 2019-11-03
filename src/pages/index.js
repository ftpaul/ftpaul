import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>This is the best title I could find</title>
  </Helmet>

  <Layout>
    <div class="container-image">
    <img src="http://placekitten.com/200/200" alt="Paulo Teixeira" />
    </div>
    <div class="container-text">
    <h1>Paulo Teixeira</h1>
    <p>I've been working on digital business for more than 5 years. Currently, I work at <u>Unbabel</u>.</p>
    <p> Thinking is something we are not able to do alone, that's why I like to collaborate with different people to reach the best solutions.</p>
    <p>Feel free to reach me out by email (ftpaul [at gmail.com]) or on linkein.</p>
    </div>
  </Layout>
  </>
)
