import React, { useState }  from "react"
import Navigation from '../components/navigation/navigation'
import Seo from '../components/seo'
import Footer from '../components/navigation/footer'
import ResumeCTA from "../components/about/resumeCTA"
import Features from "../components/about/features"
import { StaticImage } from "gatsby-plugin-image"
import CompanyHistory from "../components/about/companyHistory"



const AboutPage = ({ data }) => { 
  
  const [isOnHover, toggleExpansion] = useState(false)

  return (
  <>
  <Seo />
    
  <Navigation simplified={false} />
  
  <div className="heroWidth flex flex-wrap max-w-screen-md py-0 my-16 xs:my-6 mx-auto px-4 sm:px-0">



    <div className="flex w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full items-center ">
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

     <div className="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full text-center">
     <StaticImage src="../assets/images/paulo-teixeira-square-bowtie.jpg" alt="Paulo Teixeira | ftpaul.io" className="heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-10 rounded-full" />
        <StaticImage src="../assets/images/paulo-teixeira-square.jpg" alt="Paulo Teixeira | ftpaul.io" 
            className={isOnHover ? `heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-20 -mt-64 rounded-full opacity-0 transition ease-linear duration-1000 heroSecondImage` : `heroImage w-64 h-64 mx-auto p-0 xs:p-4 z-20 -mt-64 rounded-full opacity hover:opacity-0 transition ease-linear duration-1000 heroSecondImage`} />  
    </div>
    </div>


        <Features />


        <CompanyHistory /> 


        <ResumeCTA />
          
          
    
      <Footer />
  </>
  )
}



export default AboutPage