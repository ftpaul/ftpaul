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



  <ContentColumn>
  <div className=" grid grid-cols-1 md:grid-cols-3 ">
    <div>
      <h3 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mt-20">
        Find how can we synergize
      </h3>
    

      <ul className="mt-10 gap-x-8 gap-y-10">
        <li>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="map w-6 h-6">
                  <path fillule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Mentoring</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                I help individuals to have a meaningful career and to navigate through different contexts in their lives.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="arrows-expand w-6 h-6">
                    <path fillule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Consulting</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                I believe in connecting deeply with humans and that we can learn with everyone. If you need a peer to discuss anything, let's do it.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                  <path fillule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Connecting</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                I believe in connecting deeply with humans and that we can learn with everyone. If you need a peer to discuss anything, let's do it.
              </p>
            </div>
          </div>
        </li>
      </ul>
      </div>
      <div className=" col-span-2 calendly-inline-widget xs:mt-10">
      <InlineWidget url="https://calendly.com/ftpaulio/meeting?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1" /></div>
      </div>
    

    <p className="mt-4 text-base leading-7 text-gray-400 text-center">
      Don't want to jump into a call? Reach out to me at <strong>hey [at] ftpaul.io</strong>
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