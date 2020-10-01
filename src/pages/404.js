import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { graphql , Link} from 'gatsby'

const IndexPage = ({ data }) => { return (
  <>
  <SEO />

  <Layout>
    <div className="text-center">
      <h1 className="text-2xl text-bold text-gray-600">You just hit a road block <span role="img" aria-label="Construction">🚧</span></h1>
      <h2 className="text-2xl text-bold text-gray-600">
          That sucks! &nbsp;
          <Link className="text-yellow-600 underline hover:text-yellow-400" to="/" >Please go back home</Link>.
      </h2>
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