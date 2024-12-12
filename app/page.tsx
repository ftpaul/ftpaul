
import ImageGallery from "../components/ImageGallery"
import Features from "../components/Features"
import CompanyHistory from "../components/CompanyHistory"
import Contact from "../components/Contact"

import jobHistory from '../content/jobHistory.json'

export const metadata = {
  title: 'Paulo Teixeira · Senior Projetc Manager, Web · ftpaul.io',
  description: 'A Senior Project Manager with a solid background in engineering and marketing. Delivering digital products since 2013.',
}

export default async function IndexPage() {

    return (
      <>
      <div className="flex flex-wrap max-w-screen-lg py-0 my-16 xs:my-6 mx-auto px-4">

        <div className="w-2/3 lg:w-3/4 sm:w-full xs:w-full  ">
          

          <h1 className="text-5xl font-bold tracking-tight text-green-600 mb-6 ">Senior Project Manager,<br /> Product Owner based in Berlin 🇩🇪</h1>
          
          <h2 className="text-xl xs:text-2xl text-gray-600 pb-4 text-left m-auto">
          I am a Senior Project Manager with a strong IT and marketing background, skilled at aligning technical and business goals. I lead cross-functional teams globally, foster agile collaboration, and build trusted relationships with stakeholders. I take pride in managing diverse, cross-functional teams spread across the globe, where I’ve cultivated a collaborative spirit and agile workflows that keep everyone aligned and motivated. 
          {/* I’m committed to delivering results with clarity, from detailed roadmaps to accessible documentation, making every project a strategic win for the organization. */}
          </h2>
          
        </div>

      
      </div>

      <ImageGallery />
      
      <Features />
              
      <CompanyHistory jobHistory={jobHistory} />

      <Contact />

    </>
    )
  }