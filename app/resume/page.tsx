import ExperienceBlock from '../../components/resume/ExperienceBlock'
import Image from 'next/image'
import '../../styles/resume.css'

import content from '../../content/resume.json'
import jobHistory from '../../content/jobHistory.json'


export default async function ResumePage() {

  const seo = {
    title: "Paulo Teixeira Resume",
    description: "Find and download Paulo Teixeira's curriculum. A Project Manager with 10+ years of experience in digital businesses."
  }

  return (
    <>
      {/*
      <Seo title={seo.title} description={seo.description} />
       ... 
      <Image src="/assets/images/ezgif-5-bea54725e5.jpeg" alt="Paulo Teixeira | ftpaul.io" width={160} height={160} className="w-40 h-40 xs:w-20 xs:h-20 mt-4 z-20 rounded-full" /       ... 
  
   */}

  <div className="letter xs:p-2 p-8 mx-auto mb-24 mt-6 bg-white relative max-w-screen-lg w-11/12">

    <div className="flex flex-wrap">
      
      <div className="w-4/6  pt-4 pr-1 xs:pr-0 div-w-title">
            
          <h1 className="text-5xl xs:text-3xl font-bold text-gray-600 leading-none pt-4 pb-0 mb-0">
          <button className="focus:outline-none outline-none cursor-default hover:cursor-default" >
                {content.name}<span className="font-black text-6xl xs:text-3xl text-yellow-600">.</span>
            </button> 
          </h1>
          <h2 className="text-4xl xs:text-2xl font-normal text-gray-300 pb-4">{content.title}</h2>

      </div>

  <div className="w-2/6 div-w-image " >
 
   
   <Image 
        src="/images/paulo-teixeira-main-image.jpeg" 
        alt="Paulo Teixeira" 
        className="w-40 h-40 xs:w-20 xs:h-20 mt-4 z-20 rounded-full"
        width="400" 
        height="400" 
        priority={true}
        key="somethingelse"/>
    
  </div>

   


    {/* Summary and Experience       */}
    <div className="w-4/6 xs:w-full pt-4 pr-1 xs:pr-0 ">

      <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
      <p className="text-lg text-gray-500 pb-6">{content.summary}</p>

      <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Experience</h4>

      {jobHistory.map((job) => (
        <ExperienceBlock job={job} key={job.end_date} />
      ))}
      
    </div>
    


    {/* Details Column */}
    <div className="w-2/6 xs:w-full p-4 xs:pl-0 xs:pr-0 " >

      <div className="pt-6 pb-8 xs:hidden">
        <p className="text-base font-bold text-gray-500">Based in {content.details.location.city} <span role="img" aria-label="content.details.location.country"  ></span></p>
      </div>

      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Languages</p>
        {content.languages.map(language => (
          <p className="text-base text-gray-500 pb-0" key={language}>{language}</p>
        ))} 
      </div>

      <div className="pb-2 xs:hidden">
        <p className="text-base pb-2 font-bold text-gray-500">Skills &amp; Competencies</p>
        {content.industry_knowledge.map(group => (
          <div className="pb-3" key={group.name}>
            <p className="text-base capitalize text-gray-500 pb-0" >{group.name}</p>
             {group.individuals.map(individuals => (
              <p className="text-base capitalize text-gray-500" key={individuals}> - {individuals}</p>
            ))} 
          </div>
        ))} 
      </div>


      <div className="pb-8">
       
      </div>

      <div className="pb-8">
        
      </div>


    </div>
      <div className='w-full mt-4 xs:mt-0 xs:mb-4 text-center'>
        <a href={content.download_link} target="_blank" className="text-yellow-600 hover:text-yellow-400 hover:border-b-4 border-b-2 text-lg font-bold transition duration-500 ">Download full CV (PDF)</a>
      </div>
      
    </div>
    </div>
    
    </>
  )
}


