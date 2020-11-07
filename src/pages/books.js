import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'
import BookCard from '../components/books/bookCard'


const BooksPage = ({ data }) => { 
  
  //const currentlyReadingBooks = data.currently_reading.edges[0].node.reviews
  const readBooks = data.read.edges[0].node.reviews.slice(0,10)

  const seo  = {
    title: "Paulo Teixeira Recommendations | ftpaul.io", 
    description: "Here's a list of books, articles, videos, and others that I recommend to everyone that is into Product Management or looking for great content."
  }

  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />

  <ContentColumn>


      {/* {currentlyReadingBooks.map((book) => (
        <BookCard 
          link={book.book.link} 
          title={book.book.title} 
          author={book.book.authors[0].name} 
          image_url={book.book.image_url}
          key={book.book.id} />
      ))} */}

      <h1 className="mt-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 block">
        Recommendations
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400">
        Here you can find a handpicked list of books, articles, videos, and other relevant content that had a significant impact on how I approach my career and Product Management area.
      </p>

      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400">
        This area is a work in progress. It should be updated automaticly because it's getting data from my Goodreads account and Pocket account. Follow me on those accounts for real time updates. // missing links
      </p>  

      
      <hr className="border-yellow-600 my-16" />

      <h3 className="text-gray-900 text-3xl font-bold tracking-tight mt-10">
      Books
      </h3>
      
      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 ">
      Books are one of my primary sources of knowledge, to grasp new topics, and shape how I think. You can follow my reading habits on <a className="text-yellow-600 underline hover:text-yellow-400" href="https://www.goodreads.com/ftpaul">Goodreads</a>.
      </p>
        
      </ContentColumn>
      <ContentColumn largerColumn>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-3 xs:gap-4">
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
      </ContentColumn>

      <br />
      
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
  read: allGoodreadsShelf(filter: {name: {eq: "ftpaul-io"}}, sort: {fields: reviews___read_at, order: DESC}) {
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