import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'


const ResumePage = ({ data }) => { 
  
  const resumeData = data.allMarkdownRemark.edges[0].node.frontmatter

  

  return (
  <>
  <SEO />
  <Navigation />
  <ContentColumn>
    <h4 className="uppercase text-xs text-gray-300 tracking-widest">Summary</h4>
    <p className="text-lg text-gray-500 pb-4">{resumeData.summary}</p>

    <h4 className="uppercase text-xs text-gray-300 tracking-widest w-full">Experience</h4>

    {resumeData.experience.map((job) => (
      <>
      <img src={job.logo} className="my-1 mr-2 w-12 h-12 " />
      <p className="text-base pt-1"><span className="font-bold">{job.role}</span> at {job.company} <br/>
      <span className="text-base text-gray-300 ">{job.start_date} - {job.end_date}</span></p>
      <ul className="list-disc pl-6 pb-2">
        {job.description.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
      </>
    ))}

    

      </ContentColumn>
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
        }
        fileAbsolutePath
      }
    }
  }
}
`

export default ResumePage