import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'
import BookCard from '../components/books/bookCard'


const BooksPage = ({ data }) => { 
  
  const currentlyReadingBooks = data.currently_reading.edges[0].node.reviews
  const readBooks = data.read.edges[0].node.reviews.slice(0,10)

  

  return (
  <>
  <SEO />
  <Navigation />
  <ContentColumn>
      <p className="text-xl text-gray-500 pb-2">Books are my primary source of knowledge, I like to deep dive in technical books and occasional nonfiction, both in portuguese and in english. Here's you can find what I'm currently reading:</p>
      
        <hr />

        <div className="grid grid-cols-2 xs:grid-cols-1 gap-2 xs:gap-4">
        {currentlyReadingBooks.map((book) => (
          <BookCard 
            link={book.book.link} 
            title={book.book.title} 
            author={book.book.authors[0].name} 
            image_url={book.book.image_url}
            key={book.book.id} />
        ))}
        </div>
        

        <hr />
        <br />
        <p className="mt-4 text-xl text-gray-500 pb-2 ">These are the last 10 books I've read:</p>

        <div className="grid grid-cols-2 xs:grid-cols-1 gap-3 xs:gap-4">
        {readBooks.map((review) => (
          <BookCard 
            link={review.book.link} 
            title={review.book.title} 
            author={review.book.authors[0].name} 
            rating={review.rating} 
            image_url={review.book.image_url}
            key={review.book.id} />
        ))}
        </div>

        <p className="text-xl text-gray-500 py-2 ">You can follow my reviews and reading on <a className="text-yellow-600 underline hover:text-yellow-400" href="https://www.goodreads.com/ftpaul">my Goodreads account</a>.</p>
        </ContentColumn>
        <Footer />
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