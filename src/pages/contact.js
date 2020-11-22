import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'
import HeroSection from "../components/heroSection"
import { InlineWidget } from "react-calendly";


const ContactPage = ({ data }) => { 
  
  
  const seo  = {
    title: "Paulo Teixeira Recommendations | ftpaul.io", 
    description: "Here's a list of books, articles, videos, and others that I recommend to everyone that is into Product Management or looking for great content."
  }

  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />

  <HeroSection
    headline="Let's talk"
    description="I enjoy connecting deeply with people and taking time to help. Feel free to book a time directly with me for a short call bellow. I can help with your career, product, or we can just catch up."      
    imageFluid={data.heroImage.childImageSharp.fluid}
    imageAlt="Contact | Bermuda Illustration"
  />



  <ContentColumn>

    <InlineWidget url="https://calendly.com/ftpaulio/meeting" />

    <p className="mt-4 text-base leading-7 text-gray-300 text-center">
      Don't want to jump into a call? Reach me out at <strong>hey@ftpaul.io</strong>
    </p>

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