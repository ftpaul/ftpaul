import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ExperienceBlock from '../components/resume/experienceBlock'


const ResumePage = ({ data }) => { 
  
  const resumeData = data.allMarkdownRemark.edges[0].node.frontmatter




  return (
  <>
  <SEO />
  <Navigation />
    <div className="flex flex-wrap max-w-screen-lg mx-auto pt-8 xs:pt-0 px-2">


      <div className="w-4/6 xs:w-full pr-2 xs:pr-2 border-yellow-600 border ">

        <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
        <p className="text-lg text-gray-500 pb-6">{resumeData.summary}</p>

        <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Experience</h4>

        {resumeData.experience.map((job) => (
          <ExperienceBlock job={job} key={job.end_date} />
        ))}

        <h2 className="text-2xl text-center pt-6 pb-8 mx-auto ">
          <a className="text-yellow-600 underline hover:text-yellow-400" target="_blank" rel="noreferrer"  href="https://drive.google.com/file/d/1PuPYO0u5tYwWTIbTCtEbKX_ArNKQf2CV/view?usp=sharing">
            Download full CV (PDF)
          </a>
        </h2>
        
      </div>
    


    <div className="w-2/6 xs:w-full bg-gray-100 border-yellow-600 border">

      <p className="text-base font-bold text-gray-500">Languages</p>
      {resumeData.details.languages.map(language => (
        <p className="text-lg text-gray-500 pb-0" key={language}>{language}</p>
      ))}


      <p className="text-base font-bold text-gray-500">Industry knowledge</p>
      {resumeData.details.industry_knowledge.map(point => (
        <p className="text-lg text-gray-500 pb-0" key={point}>{point}</p>
      ))}


      <p className="text-base font-bold text-gray-500">Projects</p>
      {resumeData.details.projects.map(project => (
        <>
        <p className="text-lg text-gray-500 pb-0">{project.name}</p>
        <p className="text-lg text-gray-500 pb-0">{project.description}</p>
        </>
      ))}


      <p className="text-base font-bold text-gray-500">Random facts</p>
      {resumeData.details.random.map(fact => (
        <p className="text-lg text-gray-500 pb-0" key={fact}>{fact}</p>
      ))}

    </div>
      
    </div>
      <Footer />
  </>
  )
}




export const query = graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/resume/"}}) {
    edges {
      node {
        frontmatter {
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
            }
            industry_knowledge
            languages
            random
          }
        }
        fileAbsolutePath
      }
    }
  }
}
`

export default ResumePage