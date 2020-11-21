import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'
import Img from "gatsby-image"
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

  <div className="flex flex-wrap max-w-screen-lg py-0 my-16 xs:my-6 mx-auto">



    <div className="flex w-1/2  items-center pr-4">
      <div className="">
        <h1 className="text-5xl text-gray-600 font-bold tracking-tight text-left m-auto">
          Let's talk
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400">
          I enjoy connecting deeply with people and taking time to help. Feel free to book a time directly with me for a short call bellow. I can help with your career, product, or we can just catch up.
        </p>
      </div>
    </div>

    <div className="w-1/2 xs:w-full ">
        <Img fluid={data.heroImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" className=" h-auto mx-auto p-0 xs:p-4" />
    </div>
    </div>



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