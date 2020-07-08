import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'


const ResumePage = ({ data }) => { 
  
  const resumeData = data.allMarkdownRemark.edges[0].node.frontmatter




  return (
  <>
  <SEO />
  <Navigation />
    <div className="flex max-w-screen-lg mx-auto pt-8 xs:pt-0 px-2">
    <div className="w-4/6 border-yellow-600 border ">

    <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
      <p className="text-lg text-gray-500 pb-4">{resumeData.summary}</p>

      <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Experience</h4>

      {resumeData.experience.map((job) => (
        <>
        <img src={job.logo} alt={job.company} className="my-1 mr-2 w-12 h-12 " />
        <p className="text-base pt-1"><span className="font-bold">{job.role}</span> at {job.company} <br/>
        <span className="text-base text-gray-300 ">{job.start_date} - {job.end_date}</span></p>
        <ul className="list-disc pl-6 pb-2">
          {job.description.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
        </>
      ))}

      <h2 className="text-2xl text-center pt-6 pb-8 mx-auto ">
        <a className="text-yellow-600 underline hover:text-yellow-400" target="_blank" rel="noreferrer"  href="https://drive.google.com/file/d/1PuPYO0u5tYwWTIbTCtEbKX_ArNKQf2CV/view?usp=sharing">Download full CV (PDF)</a></h2>
      

        </div>
    


    <div className="w-2/6 bg-yellow-100">

    <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
      <p className="text-lg text-gray-500 pb-4">{resumeData.summary}</p>

      <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Industry industry_knowledge</h4>

      {resumeData.details.industry_knowledge.map(point => (
        <p className="text-lg text-gray-500 pb-0">{point}</p>
      ))}
{console.log(resumeData.details)}
      


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
            email
            industry_knowledge
            landguages
            linkedin
            phone
            random
            website
            location {
              city
              country
              description
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