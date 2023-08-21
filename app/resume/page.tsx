// import React from "react";
// import Seo from '../components/seo';
// import Footer from '../components/resume/footerCTA';
// import ExperienceBlock from '../components/resume/experienceBlock';
// import Navigation from '../components/navigation/navigation';
// import Image from 'next/image';
// import { ResumeDataType } from '../types'; 

type ResumeProps = {
  resumeData: ResumeDataType;
};

const ResumePage: React.FC<ResumeProps> = ({ resumeData }) => {

  const seo = {
    title: "Paulo Teixeira Resume",
    description: "Find and download Paulo Teixeira's curriculum. A Product Manager with 5+ years of experience in digital businesses."
  };

  // The component body remains largely unchanged
  // ... 

  return (
    <>
      {/*
      <Seo title={seo.title} description={seo.description} />
       ... 
      <Image src="/assets/images/ezgif-5-bea54725e5.jpeg" alt="Paulo Teixeira | ftpaul.io" width={160} height={160} className="w-40 h-40 xs:w-20 xs:h-20 mt-4 z-20 rounded-full" /       ... 
  
   <Navigation simplified={false} /> 

 <Navigation  /> */}

  <div className="letter p-8 mx-auto mb-24 mt-6 bg-white relative max-w-screen-lg w-11/12">

    <div className="flex flex-wrap">
      
      <div className="w-4/6  pt-4 pr-1 xs:pr-2 div-w-title">
            
          <h1 className="text-5xl xs:text-3xl font-bold text-gray-600 leading-none pt-4 pb-0 mb-0">
          <button className="focus:outline-none outline-none cursor-default hover:cursor-default" >
                {resumeData.name}<span className="font-black text-6xl xs:text-3xl text-yellow-600">.</span>
            </button> 
          </h1>
          <h2 className="text-4xl xs:text-2xl font-normal text-gray-300 pb-4">{resumeData.title}</h2>

      </div>

  <div className="w-2/6 div-w-image " >
 
   {/* <StaticImage src="../assets/images/ezgif-5-bea54725e5.jpeg" alt="Paulo Teixeira | ftpaul.io" className="w-40 h-40 xs:w-20 xs:h-20 mt-4 z-20 rounded-full" /> */}
    
    
  </div>

   


    {/* Summary and Experience       */}
    <div className="w-4/6 xs:w-full pt-4 pr-1 xs:pr-2 ">

      <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
      <p className="text-lg text-gray-500 pb-6">{resumeData.summary}</p>

      <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Experience</h4>

      {resumeData.experience.map((job) => (
        // <ExperienceBlock job={job} key={job.end_date} />
        <p>one</p>
      ))}
      
    </div>
    


    {/* Details Column */}
    <div className="w-2/6 xs:w-full p-4 xs:pl-0 " >

      <div className="pt-6 pb-8 xs:hidden">
        <p className="text-base font-bold text-gray-500">Based in {resumeData.details.location.city} <span role="img" aria-label={resumeData.details.location.country}  dangerouslySetInnerHTML={{ __html: resumeData.details.location.emoji }}></span></p>
      </div>

      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Languages</p>
        {resumeData.details.languages.map(language => (
          <p className="text-base text-gray-500 pb-0" key={language}>{language}</p>
        ))}
      </div>

      <div className="pb-2 xs:hidden">
        <p className="text-base pb-2 font-bold text-gray-500">Skills &amp; Competencies</p>
        {resumeData.details.industry_knowledge.map(group => (
          <div className="pb-3" key={group.name}>
            <p className="text-base capitalize text-gray-500 pb-0" >{group.name}</p>
            {group.individuals.map(individuals => (
              <p className="text-base capitalize text-gray-500" key={individuals}> - {individuals}</p>
            ))}
          </div>
        ))}
      </div>


      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Projects</p>
        {resumeData.details.projects.map(project => (
          <div key={project.name} >
          <p className="text-base text-gray-500 pb-0 underline">
            <a href={project.link} alt={project.name} className="text-yellow-600 underline hover:text-yellow-400">
            {project.name}</a>
            </p>
          <p className="text-base text-gray-500 pb-0">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Random facts</p>
        {resumeData.details.random.map(fact => (
          <div key={fact.link}>
          <p className="text-base text-gray-500 pb-0" >
            {((fact.link.length > 0) ? (<a className="text-yellow-600 underline hover:text-yellow-400" href={fact.link}>{fact.description}</a>) :
            
              fact.description
            )}
            
          </p>
          </div>
        ))}
      </div>

    </div>
      
    </div>
    </div>
    
    <div className="py-1">

    </div>
    {/* <Footer /> */}
    </>
  )
}

{ /*
 export async function getStaticProps() 
  // Fetch your data here, for example:
  //const data = await fetchData(); // Assume fetchData is a function 
*/}
