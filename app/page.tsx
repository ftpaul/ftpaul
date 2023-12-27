import Image from "next/image"
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
      <div className="heroWidth flex flex-wrap max-w-screen-lg py-0 my-16 xs:my-6 mx-auto px-4 sm:px-0">

      <div className="flex w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full items-center ">
        <div >
          <p className="heroHello text-xl xs:text-xl leading-tight text-gray-500 py-4 m-auto">
            Hey there <span role="img" aria-label="Wave">👋🏽</span>
              </p>
          <h1 className="heroTitle text-3xl xs:text-2xl leading-snug text-gray-500 pb-4 text-left m-auto">
            My name is&nbsp; 
              <span className="border-yellow-600 border-b-2" >
                  Paulo Teixeira
              </span><span className="text-yellow-600">.</span><br/> 
              I am a Senior Project Manager with 10+ years of experience delivering digital projects. 
          </h1>
        </div>
      </div>

      <div className="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full text-center">
        <Image 
          src="/images/paulo-teixeira-main-image.jpeg" 
          alt="Paulo Teixeira" 
          className="w-96 h-96 mx-auto p-0 xs:p-4 z-20 rounded-full"
          width="400" 
          height="400" 
          priority={true}/>
      </div>
      </div>
      
      <Features />
              
      <CompanyHistory jobHistory={jobHistory} />

      <Contact />

    </>
    )
  }