import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'


const ContactPage = ({ data }) => { 
  
  
  const seo  = {
    title: "Paulo Teixeira | Changelog | ftpaul.io", 
    description: "Here's a list of books, articles, videos, and others that I recommend to everyone that is into Product Management or looking for great content."
  }

  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />



  <ContentColumn>
  <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Changelog
      </h3>
    </div>
  <div className="mt-10">
  <table class="table-auto">
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Intro to CSS</td>
      <td>Adam</td>
      <td>858</td>
    </tr>
    <tr class="bg-emerald-200">
      <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td>Adam</td>
      <td>112</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td>1,280</td>
    </tr>
  </tbody>
</table>
    </div>


  </ContentColumn>
      
  
  
  <Footer />
  </>
  )
}




export const query = graphql`
{
  
  heroImage: file(relativePath: {eq: "icons8-bermuda-illustration-002.png"}) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default ContactPage