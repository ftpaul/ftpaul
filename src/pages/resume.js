import React from "react"
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Footer from '../components/resume/footerCTA'
import ExperienceBlock from '../components/resume/experienceBlock'
import YellowTopBar from '../components/yellowTopBar'
import '../assets/css/resume.css'


const ResumePage = ({ data }) => { 
  
  const resumeData = data.allMarkdownRemark.edges[0].node.frontmatter


  const seo  = {
    title: "Paulo Teixeira Resume", 
    description: "Find and download Paulo Teixeira's curriculum. A Product Manager with 5+ years of experience in digital businesses."
  }


  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  
  <YellowTopBar />

  <div className="flex flex-wrap max-w-screen-lg mx-auto py-8 px-4">
  
      <Link to="/" className="bg-transparent hover:bg-yellow-500 text-gray-400 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
        &larr; Back to ftpaul.io
      </Link>

  </div>



  <div className="letter p-8 mx-auto mb-24 mt-6 bg-white relative max-w-screen-lg w-11/12">

    <div className="flex flex-wrap">
      
      <div className="w-4/6  pt-4 pr-1 xs:pr-2 ">
            
          <h1 className="text-5xl xs:text-3xl font-bold text-gray-600 leading-none pt-4 pb-0 mb-0">
            {resumeData.name}<span className="font-black text-6xl xs:text-3xl text-yellow-600">.</span>
          </h1>
          <h2 className="text-4xl xs:text-2xl font-normal text-gray-300 pb-4">{resumeData.title}</h2>

      </div>

  <div className="w-2/6  " >

    <img src="/paulo-teixeira-smiling.gif" alt="Paulo Teixeira | ftpaul.io" className="w-40 h-40 xs:w-20 xs:h-20 mt-4  z-10 rounded-full" />
    <img src={resumeData.details.picture} alt="Paulo Teixeira | ftpaul.io" className="w-40 h-40 xs:w-20 xs:h-20  z-20 rounded-full -mt-40 xs:-mt-24  hover:opacity-0 transition ease-linear duration-500" />
      

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


      <div className="pt-6 pb-8">
        <p className="text-base font-bold text-gray-500">Languages</p>
        {resumeData.details.languages.map(language => (
          <p className="text-base text-gray-500 pb-0" key={language}>{language}</p>
        ))}
      </div>

      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Industry knowledge</p>
        {resumeData.details.industry_knowledge.map(point => (
          <p className="text-base text-gray-500 pb-0" key={point}>{point}</p>
        ))}
      </div>


      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Projects</p>
        {resumeData.details.projects.map(project => (
          <div key={project.name}>
          <a href={project.link} alt={project.name}>
            <p className="text-base text-gray-500 pb-0 underline">{project.name}</p>
          </a>
          <p className="text-base text-gray-500 pb-0">{project.description}</p>
          </div>
        ))}
      </div>


      <div className="pb-8">
        <p className="text-base font-bold text-gray-500">Random facts</p>
        {resumeData.details.random.map(fact => (
          <p className="text-base text-gray-500 pb-0" key={fact}>{fact}</p>
        ))}
      </div>

    </div>
      
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