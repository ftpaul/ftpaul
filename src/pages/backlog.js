import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'


const Backlog = ({ data }) => { 
  
  
  const seo  = {
    title: "Paulo Teixeira | Changelog | ftpaul.io", 
    description: "..."
  }

  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />



  <ContentColumn>
    
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class=" overflow-hidden border-b border-gray-200">
        <table class="min-w-full divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entry Date
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Released Date
              </th>
            </tr>
          </thead>
          <tbody class=" divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Remove Chatbot and Bookshelf pages</div>
                {/* <div class="text-sm text-gray-500">Optimization</div> */}
              </td>
              <td class="px-6 py-4 whitespace">
                <span class="text-sm font-medium uppercase bg-green-600 py-1 px-2 rounded text-green-100 align-middle">
                  Done
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                02-06-2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                03-06-2021
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Simplify Index and Contact pages</div>
                <div class="text-sm text-gray-500">Cut unecessary things, make the pages straight foward. Reduce things to its bare minimum.</div> 
              </td>
              <td class="px-6 py-4 whitespace">
                {/* <span class="text-sm font-medium uppercase bg-green-600 py-1 px-2 rounded text-green-100 align-middle">
                  Done
                </span> */}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                02-06-2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                03-06-2021
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Implement Backlog Area</div>
                <div class="text-sm text-gray-500">Backlog items should some from somehwere</div> 
              </td>
              <td class="px-6 py-4 whitespace">
                {/* <span class="text-sm font-medium uppercase bg-green-600 py-1 px-2 rounded text-green-100 align-middle">
                  Done
                </span> */}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                02-06-2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                03-06-2021
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


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