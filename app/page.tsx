import Image from "next/image"
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
          <Image 
            src="/images/paulo-teixeira-main-image.jpeg" 
            alt="Paulo Teixeira" 
            className="w-16 max-h-16 mb-6 p-0 xs:p-4 rounded-full"
            width="64" 
            height="64" 
            priority={true}/>

          <h1 className="text-5xl font-bold tracking-tight text-green-600 mb-6 ">Senior Project Manager,<br /> Product Owner based in Berlin 🇩🇪</h1>
          
          <h2 className="text-xl xs:text-2xl text-gray-600 pb-4 text-left m-auto">
          I am a Senior Project Manager with a strong IT and marketing background, skilled at aligning technical and business goals. I lead cross-functional teams globally, foster agile collaboration, and build trusted relationships with senior stakeholders. 
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