import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'



const AboutPage = ({ data }) => { return (
  <>
  <SEO />
    
  <Navigation />
  <ContentColumn>

    <div className="w-4/6 lg:w-4/6 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
    <p className="text-3xl xs:text-2xl leading-tight text-gray-500 py-4">Hey there <span role="img" aria-label="Wave">👋🏽</span></p>
        <p className="text-2xl xs:text-xl leading-snug text-gray-500 pb-4 xs:text-left">My name is <strong>Paulo Teixeira</strong>, and I am a Product Manager with a solid background in product, marketing, and management. I love to build methodologies that drive value to individuals and organizations. I aim to impact people with purposeful experience.</p>
    </div>

    <div className="w-2/6 lg:w-2/6 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
    {/* <img src="/paulo-teixeira-smiling.gif" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 xs:w-20 xs:h-20 mt-4  z-10 rounded-full" /> */}
        {/* <img src="/paulo-teixeira-resume.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 xs:w-20 xs:h-20  z-20 rounded-full -mt-64 xs:-mt-20  hover:opacity-0 transition ease-linear duration-500" /> */}
        <img src="/paulo-teixeira-resume.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 mx-auto z-20 rounded-full" />
    </div>

    <div className="w-full pt-16 pr-1 xs:pr-2 ">
        <h2 className="text-3xl xs:text-2xl leading-tight text-gray-500 py-4">The features you will fall in love with</h2>
        {/* <p className="text-lg xs:text-lg leading-snug text-gray-400 pb-4 xs:text-left">I am Paulo Teixeira, a <strong>Product Manager</strong> with a dynamic solid background in product, marketing, and in management. When I am not working I like to code, and build processes and methodologies. </p> */}

        <ul className="text-lg list-disc pl-6 pb-4 exp-ul-bullets">
          <li><strong>Product</strong> - From defining MVPs to launch them in the market. I am an experienced product person that looks to focus on building the business outcomes and user experience.</li>
          <li><strong>Growth</strong> - Focusing on the intersection between Product and Marketing, I impact the company's growth by optimizing experiences that drive value.</li>
          <li><strong>Management</strong> - Throughout my career, I've empowered individuals and teams to be at their best. People are key in any strategy, and I make sure they know that.</li>
          <li><strong>Methodologies</strong> - I see everything as a learning opportunity. I love to build and iterate methodologies that help us prosper in chaotic environments and situations. </li>
        </ul>
    </div>
  </ContentColumn>

  <div className="flex flex-wrap w-full mx-auto pt-8 xs:pt-0 px-2 bg-yellow-600">
    <div className="w-1/2 lg:w-1/2 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
      <img src="/paulo-teixeira-resume-screenshot.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 mx-auto z-20" />
    </div>
    <div className="w-1/2 lg:w-1/2 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
      <h2 className="text-3xl xs:text-2xl leading-tight text-white py-16 xs:py-4" >See my resume &rarr;</h2>
    </div>
  </div>
    
    {/* <div className="w-3/12 lg:w-3/12 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 text-center">
      <h3 className="text-xl xs:text-2xl leading-tight text-gray-500 py-4">Product</h3>
      <p className="text-lg xs:text-xl leading-snug text-gray-500 pb-4 xs:text-left">From ideation, implementation, and launching I've been involved in multiple products, both B2B and B2C </p>
    </div>

    <div className="w-3/12 lg:w-3/12 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 text-center">
      <h3 className="text-xl xs:text-2xl leading-tight text-gray-500 py-4">Growth</h3>
      <p className="text-lg xs:text-xl leading-snug text-gray-500 pb-4 xs:text-left">Focusing on the intersection between product and marketing, I impact product growth. </p>
    </div>

    <div className="w-3/12 lg:w-3/12 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 text-center">
      <h3 className="text-xl xs:text-2xl leading-tight text-gray-500 py-4">Management</h3>
      <p className="text-lg xs:text-xl leading-snug text-gray-500 pb-4 xs:text-left">Throuthout my career I learnt tht people are key. I've been focusing individuals and teams to thrive in the organization and contribute to the business's objectives.</p>
    </div>

    <div className="w-3/12 lg:w-3/12 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 text-center">
      <h3 className="text-xl xs:text-2xl leading-tight text-gray-500 py-4">Methodologies</h3>
      <p className="text-lg xs:text-xl leading-snug text-gray-500 pb-4 xs:text-left">I love to buuild and iterate methodologies in multiples areas that last and contribute to success.</p>
    </div> */}

 
      

      
    
      
      
      
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