import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Hello stranger!</h1>
    <p>
      Check out <Link to="/about/">who am I</Link>
    </p>
  </Layout>
)
