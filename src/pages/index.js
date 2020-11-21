import React, { useState }  from "react"
import { graphql, Link } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ResumeCTA from "../components/about/resumeCTA"
import Testimonials from "../components/about/testimonials"
import Features from "../components/about/features"
import SideProjects from "../components/about/sideProjects"
import Img from "gatsby-image"



const AboutPage = ({ data }) => { 
  
  const [isOnHover, toggleExpansion] = useState(false)

  return (
  <>
  <SEO />
    
  <Navigation simplified={false} />
  
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
            </button><span className="text-yellow-600">.</span><br/> 
            I am a Product Manager with an experienced background in engineering and marketing. 
        </h1>
      </div>
    </div>

    <div className="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full ">
        <Img fluid={data.secondImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" className="heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-10 rounded-full" />
        <Img fluid={data.firstImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" 
            className={isOnHover ? `heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-20 -mt-64 rounded-full opacity-0 transition ease-linear duration-1000 heroSecondImage` : `heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-20 -mt-64 rounded-full opacity hover:opacity-0 transition ease-linear duration-1000 heroSecondImage`} />
    </div>
    </div>


  <Features />


  <ResumeCTA />
    
    
  <SideProjects /> 
  
  <Testimonials />

  

 
  <div className="bg-yellow-600">
    <div className="max-w-screen-xl mx-auto text-center">
      <div className="py-24">
      <h3 className="text-4xl text-gray-500 font-bold tracking-tight">
        Ready to step up your game?</h3>
        <h3 className="text-4xl text-gray-500 font-bold tracking-tight mt-2">
        <Link to="/contact" className="border-b-4 border-white hover:text-white ">
          Get in touch today here.
          </Link>
      </h3>
      <br/>
        
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