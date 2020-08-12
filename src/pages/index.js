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
  
  // onClick={() => toggleExpansion(!isOnHover)


  const [isOnHover, toggleExpansion] = useState(false)

  return (
  <>
  <SEO />
    
  <Navigation />
  
  <div className="flex flex-wrap max-w-screen-lg py-8 my-16 xs:my-6 mx-auto content-end ">



    <div className="flex w-1/2 lg:w-1/2 sm:w-full xs:w-full items-center px-4">
      <div >
        <p className="text-3xl xs:text-2xl leading-tight text-gray-500 py-4 m-auto">
          Hey there <span role="img" aria-label="Wave">👋🏽</span>
            </p>
        <p className="text-4xl xs:text-xl leading-snug text-gray-500 pb-4 text-left m-auto">
          My name is <span className="border-yellow-600 border-b-2" onMouseOver={() => toggleExpansion(!isOnHover)} onMouseLeave={() => toggleExpansion(!isOnHover)}>Paulo Teixeira</span>.<br/> I am a Product Manager with a solid background in product, marketing, and management. 
        </p>
      </div>
    </div>

    <div className="w-1/2 lg:w-1/2 sm:w-full xs:w-full ">
        <Img fluid={data.secondImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" className="w-96 h-96 mx-auto p-0 xs:p-4 z-10 rounded-xxl" />
        <div id="firstPicture">
        {/* <Img fluid={data.firstImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" className="w-96 h-96 mx-auto p-0 xs:p-4 z-20 -mt-96 rounded-xxl hover:opacity-0 transition ease-linear duration-1000 firstPicture" /> */}
        <Img fluid={data.firstImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" 
          className={isOnHover ? `w-96 h-96 mx-auto p-0 xs:p-4 z-20 -mt-96 rounded-xxl opacity-0 transition ease-linear duration-1000 firstPicture` : `w-96 h-96 mx-auto p-0 xs:p-4 z-20 -mt-96 rounded-xxl opacity hover:opacity-0 transition ease-linear duration-1000 firstPicture`} />
        </div>
    </div>
    </div>


  <Features />


  <ResumeCTA />
    
    
  <Testimonials />

 
  <div class="bg-yellow-600">
    <div class="max-w-screen-xl flex flex-wrap mx-auto py-20 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <div className="w-4/6 xs:w-full">
      <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl xs:font-bold xs:text-2xl sm:leading-10 flex-shrink">
        Ready to set up your game?
        <br/>
        <span class="text-white">Get in touch with me today.</span>
      </h2>
      </div>
    <div class="w-2/6 xs:w-full mt-8 sm:my-4 flex lg:flex-shrink-0 lg:mt-0">
      <div class="ml-3 xs:ml-0 inline-flex rounded-md shadow">
        <a href="mailto:hey@ftpaul.io?subject=Saw%20your%20website" class="inline-flex font-bold items-center justify-center px-5 py-3 border border-transparent text-lg leading-6 rounded-md text-yellow-600 bg-white hover:bg-yellow-600 hover:border-4 hover:border-white hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Get in touch
        </a>
      </div>
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