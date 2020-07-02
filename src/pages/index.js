import React from "react"
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
      {/* <img src="/paulo-teixeira.png" className="justify-center flex h-48 w-48" /> */}
      {/* https://joaopedroreis.pt/image-content/post-4/webdevelopment-sessions%20(1%20of%201).jpg */}
      <p className="text-3xl xs:text-2xl leading-tight text-gray-500 pb-4">Hey there <span role="img" aria-label="Wave">👋🏽</span></p>
      <p className="text-2xl xs:text-xl leading-snug text-gray-500 pb-4 text-justify xs:text-left">I am Paulo Teixeira, a <strong>Product Manager</strong> with a dynamic background as a developer and in digital marketing, with 6+ years of experience working with digital products. I'm passionate about delivering outstanding experiences and to build meaningful collaborations that allow teams to create extraordiary work. </p>

      <Img fluid={data.file.childImageSharp.fluid} alt="Paulo Teixeira - Product Manager" className="h-full w-full object-cover mx-24 xs:mx-4 mb-4" />
      
      <p className="text-xl xs:text-lg leading-snug text-gray-500 pb-2 text-justify xs:text-left">PS: I'm currently open to new opportunities as a Product Manager or Owner. In case you're looking for someone to deliver high-quality digital products get in touch with me via&nbsp; 
        <a href="https://linkedin.com/in/ftpaul" className="text-yellow-600 underline hover:text-yellow-400">LinkedIn</a> or&nbsp;
        <a href="mailto:ftpaul@gmail.com" className="text-yellow-600 underline hover:text-yellow-400">e-mail</a>.
      </p>
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