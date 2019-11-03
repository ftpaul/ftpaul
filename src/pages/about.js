import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>This is me!</h1>
    <p>
      Go <Link to="/">Home</Link>
    </p>
  </Layout>
)
