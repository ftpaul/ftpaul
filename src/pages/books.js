import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.jpg'
import { graphql } from 'gatsby'
 


const BooksPage = ({ data }) => { 
  
  const currentlyReadingBooks = data.currently_reading.edges[0].node.reviews
  const readBooks = data.read.edges[0].node.reviews.slice(0,10)


  return (
  <>
  <Helmet bodyAttributes={{
        class: 'bg-gray-100 font-lato'
    }}>
    <link rel="icon" href={favicon} />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
  <div className="w-screen h-2 bg-yellow-500 absolute t-0 l-0"></div>
  <div className="flex flex-wrap max-w-screen-md mx-auto pt-32 px-2">
  <div className="" >
      <h1 className="text-4xl text-gray-600 pb-6">Paulo Teixeira<span className="font-bold text-yellow-600">.</span></h1>
      <p className="text-2xl text-gray-500 pb-2">Books that's currently reading:</p>
      {currentlyReadingBooks.map((book) => (
        <>
        <img src={book.book.image_url} alt={book.book.title} className="" />
        <a href={book.book.link} target="_blank" rel="noreferrer"><p>{book.book.title}</p></a>
        </>
        ))}
        <hr />
        <table className="table-auto">
        <thead>
          <th className="px-4 py-2">Cover</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Author</th>
          <th className="px-4 py-2">Rating</th>
        </thead>
          {readBooks.map((review) => (
          <tr>
          <td className="px-4 py-2"><img src={review.book.image_url} alt={review.book.title} className="" /></td>
          <td className="px-4 py-2"><a href={review.book.link} target="_blank" rel="noreferrer">{review.book.title}</a></td>
          <td className="px-4 py-2">Author</td>
          <td className="px-4 py-2">{review.rating}/5</td>
          </tr>
          ))}
        </table> 
        </div>
  </div>
  </>
  )
}



export const query = graphql`
{
  currently_reading: allGoodreadsShelf(filter: {name: {eq: "currently-reading"}}) {
    edges {
      node {
        reviews {
          book {
            title
            image_url
            link
            authors {
              name
            }
          }
        }
      }
    }
  }
  read: allGoodreadsShelf(filter: {name: {eq: "read"}}, sort: {fields: reviews___read_at, order: DESC}, limit: 10) {
    edges {
      node {
        reviews {
          rating
          read_at
          book {
            title
            image_url
            link
            authors {
              name
            }
          }
        }
      }
    }
  }
}
`

export default BooksPage