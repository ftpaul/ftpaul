import React, { useState }  from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ResumeCTA from "../components/about/resumeCTA"
import Testimonials from "../components/about/testimonials"
import Features from "../components/about/features"
import Img from "gatsby-image"



const AboutPage = ({ data }) => { 
  
  const [isOnHover, toggleExpansion] = useState(false)

  return (
  <>
  <SEO />
    
  <Navigation />
  
  <div className="heroWidth flex flex-wrap max-w-screen-md py-0 my-16 xs:my-6 mx-auto">



    <div className="flex w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full items-center px-4">
      <div >
        <p className="heroHello text-xl xs:text-xl leading-tight text-gray-500 py-4 m-auto">
          Hey there <span role="img" aria-label="Wave">👋🏽</span>
            </p>
        <h1 className="heroTitle text-2xl xs:text-2xl leading-snug text-gray-500 pb-4 text-left m-auto">
          My name is&nbsp; 
            <button className="border-yellow-600 border-b-2 focus:outline-none outline-none cursor-default hover:cursor-default" 
              onMouseOver={() => toggleExpansion(!isOnHover)} 
              onMouseLeave={() => toggleExpansion(!isOnHover)}
              onFocus={ () => void 0 }>
                Paulo Teixeira
            </button>.<br/> 
            I am a Product Manager with an experienced background in engineering and marketing. 
        </h1>
      </div>
    </div>

    <div className="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full ">
        <Img fluid={data.secondImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" className="heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-10 rounded-full" />
        <Img fluid={data.firstImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" 
            className={isOnHover ? `heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-20 -mt-64 rounded-full opacity-0 transition ease-linear duration-1000 heroSecondImage` : `heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-20 -mt-64 rounded-xxl opacity hover:opacity-0 transition ease-linear duration-1000 heroSecondImage`} />
    </div>
    </div>


  <Features />


  <ResumeCTA />
    
    
  <Testimonials />

 
  <div className="bg-yellow-600">
    <div className="max-w-screen-xl flex flex-wrap mx-auto py-24 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between lg:text-center">
      <div className="w-full">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl xs:font-bold xs:text-2xl sm:leading-10 flex-shrink">
        Ready to step up your game?
        <br/>
        <span className="">Get in touch today:</span>
      </h2>
      <br/>
      <h1 className="text-5xl leading-9 font-extrabold tracking-tight text-white sm:text-5xl xs:font-bold xs:text-3xl sm:leading-10 flex-shrink">
        <a href="mailto:hey@ftpaul.io?subject=I%20saw%20your%20website%20and..." className="hover:border-4 hover:border-white hover:underline focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          hey@ftpaul.io
        </a>
        </h1>
      </div>
   
  </div>
</div>

      
    
      
      
      
      <Footer />
  </>
  )
}

export const query = graphql`
{
  firstImage: file(relativePath: {eq: "paulo-teixeira-square.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  secondImage: file(relativePath: {eq: "paulo-teixeira-square-bowtie.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default AboutPage