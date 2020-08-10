import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'
import Img from "gatsby-image"



const AboutPage = ({ data }) => { return (
  <>
  <SEO />
    
  <Navigation />
  <ContentColumn>

    <div className="w-4/6 lg:w-4/6 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
    <p className="text-3xl xs:text-2xl leading-tight text-gray-500 py-4">Hey there <span role="img" aria-label="Wave">👋🏽</span></p>
        <p className="text-2xl xs:text-xl leading-snug text-gray-500 pb-4 text-justify xs:text-left">I am Paulo Teixeira, a <strong>Product Manager</strong> with a dynamic solid background in product, marketing, and in management. When I am not working I like to code, and build processes and methodologies. </p>
    </div>

    <div className="w-2/6 lg:w-2/6 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
    {/* <img src="/paulo-teixeira-smiling.gif" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 xs:w-20 xs:h-20 mt-4  z-10 rounded-full" /> */}
        {/* <img src="/paulo-teixeira-resume.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 xs:w-20 xs:h-20  z-20 rounded-full -mt-64 xs:-mt-20  hover:opacity-0 transition ease-linear duration-500" /> */}
        <img src="/paulo-teixeira-resume.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 mx-auto z-20 rounded-full" />
    </div>
      

      
    
      
      
      </ContentColumn>
      <Footer />
  </>
  )
}

export const query = graphql`
{
  file(relativePath: {eq: "paulo-teixeira-product-manager.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default AboutPage