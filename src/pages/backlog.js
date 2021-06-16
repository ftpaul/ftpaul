import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'


const Backlog = ({data}) => { 

  const seo  = {
    title: "Paulo Teixeira | Changelog | ftpaul.io", 
    description: "..."
  }


  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />

 

  <ContentColumn>
     <table className="min-w-full divide-gray-200">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Entry Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Released Date
          </th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200">
        {data.allGoogleSheet1Sheet.edges.map(node => {
         console.log("your node data is", node.node.id);       
         return (
          <tr key={node.node.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {node.node.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {node.node.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {node.node.createdDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {node.node.status}
              </td>
              </tr>)
        })}
      </tbody>
    </table>

  </ContentColumn>
      
  
  
  <Footer />
  </>
  )
}


export const query = graphql`
{
  allGoogleSheet1Sheet {
    edges {
      node {
        id
        description
        createdDate
        status
      }
    }
  }
}
`



export default Backlog