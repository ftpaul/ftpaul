import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.jpg'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import ContentColumn from '../components/contentColumn'
 


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
  <Navigation />
  <ContentColumn>
      <p className="text-xl text-gray-500 pb-2">Books are my primary source of knowledge, I like to deep dive in technical books and occasional nonfiction, both in portuguese and in english. Here's you can find what I'm currently reading:</p>
      <table className="table-auto mb-8">
        <thead>
          <tr>
          <th className="px-4 py-2">Cover</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Author</th>
          </tr>
        </thead>
        <tbody>
      {currentlyReadingBooks.map((book) => (
        
        <tr key={book.book.id}>
          <td className="px-4 py-2"><img src={book.book.image_url} alt={book.book.title} className="" /></td>
          <td className="px-4 py-2"><a href={book.book.link} target="_blank" rel="noreferrer">{book.book.title}</a></td>
          <td className="px-4 py-2">{book.book.authors[0].name}</td>
          </tr>
        
        ))}
        </tbody>
    </table> 
        <hr />
        <p className="text-xl text-gray-500 pb-2 ">These are the last 10 books I've read:</p>
        <table className="table-auto mb-8">
        <thead>
        <tr>
          <th className="px-4 py-2">Cover</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Author</th>
          <th className="px-4 py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {readBooks.map((review) => (
          <tr key={review.book.id}>
          <td className="px-4 py-2"><img src={review.book.image_url} alt={review.book.title} className="" /></td>
          <td className="px-4 py-2"><a href={review.book.link} target="_blank" rel="noreferrer">{review.book.title}</a></td>
          <td className="px-4 py-2">{review.book.authors[0].name}</td>
          <td className="px-4 py-2">{review.rating}/5</td>
          </tr>
          ))}
          </tbody>
        </table> 
        <p className="text-xl text-gray-500 pb-2 ">You can follow my reviews and reading on <a className="text-yellow-600 underline hover:text-yellow-400" href="https://www.goodreads.com/ftpaul">my Goodreads account</a>.</p>
        </ContentColumn>
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
            id
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
            id
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