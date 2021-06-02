import React, { useState } from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Footer from '../components/resume/footerCTA'
import ExperienceBlock from '../components/resume/experienceBlock'
import Navigation from '../components/navigation/navigation'
import '../assets/css/resume.css'
//import Img from "gatsby-image"


const ResumePage = ({ data }) => { 
  

  const [isOnHover, toggleExpansion] = useState(false)

  const resumeData = data.resume.edges[0].node.frontmatter

  const seo  = {
    title: "Paulo Teixeira Resume", 
    description: "Find and download Paulo Teixeira's curriculum. A Product Manager with 5+ years of experience in digital businesses."
  }


  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  
  <Navigation simplified={true} />

  <div className="letter p-8 mx-auto mb-24 mt-6 bg-white relative max-w-screen-lg w-11/12">

    <div className="flex flex-wrap">
      
      <div className="w-4/6  pt-4 pr-1 xs:pr-2 div-w-title">
            
          <h1 className="text-5xl xs:text-3xl font-bold text-gray-600 leading-none pt-4 pb-0 mb-0">
          <button className="focus:outline-none outline-none cursor-default hover:cursor-default" 
              onMouseOver={() => toggleExpansion(true)} 
              onMouseLeave={() => toggleExpansion(false)}
              onFocus={ () => void 0 }>
                {resumeData.name}<span className="font-black text-6xl xs:text-3xl text-yellow-600">.</span>
            </button>
          </h1>
          <h2 className="text-4xl xs:text-2xl font-normal text-gray-300 pb-4">{resumeData.title}</h2>

      </div>

  <div className="w-2/6 div-w-image " >
 
    <img src={resumeData.details.picture} alt="Paulo Teixeira | ftpaul.io" className="w-40 h-40 xs:w-20 xs:h-20 mt-4 z-20 rounded-full" />
    <img src="/paulo-teixeira-smiling.gif" alt="Paulo Teixeira | ftpaul.io" 
      className={isOnHover ? 
        `w-40 h-40 xs:p-4 z-0 -mt-40 rounded-full transition ease-linear duration-1000 opacity-100 hover:opacity-0` : 
        `w-40 h-40 xs:p-4 z-0 -mt-40 rounded-full transition ease-linear duration-1000 opacity-0 hover:opacity-100`} />
    
  </div>

   


    {/* Summary and Experience       */}
    <div className="w-4/6 xs:w-full pt-4 pr-1 xs:pr-2 ">

      <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
      <p className="text-lg text-gray-500 pb-6">{resumeData.summary}</p>

      <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Experience</h4>

      {resumeData.experience.map((job) => (
        <ExperienceBlock job={job} key={job.end_date} />
      ))}
      
    </div>
    


    {/* Details Column */}
    <div className="w-2/6 xs:w-full p-4 " >

      <div className="pt-6 pb-8 xs:hidden">
        <p className="text-base font-bold text-gray-500">Based in {resumeData.details.location.city} <span role="img" aria-label="Portugal">🇵🇹</span></p>
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
    <Footer />
  </>
  )
}


export const query = graphql`
{
  resume: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/resume/"}}) {
    edges {
      node {
        frontmatter {
          name
          title
          summary
          experience {
            company
            description
            end_date
            location
            role
            start_date
            logo
          }
          education {
            course
            school
          }
          details {
            picture
            contacts {
              email 
              linkedin
              website
              phone
            }
            location {
              city
              country
              description
            }
            projects {
              name
              description
              link
            }
            industry_knowledge {
              name
              individuals
            }
            languages
            random {
              description
              link
            }
          }
        }
        fileAbsolutePath
      }
    }
  }
}
`

export default ResumePage