import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'


const BooksPage = ({ data }) => { 
  
  const currentlyReadingBooks = data.currently_reading.edges[0].node.reviews
  const readBooks = data.read.edges[0].node.reviews.slice(0,10)

  const ratingYellowStar = `<span class="text-yellow-600">★</span>`
  const ratingGrayStar = `<span class="text-gray-400">★</span>`

  return (
  <>
  <SEO />
  <Navigation />
  <ContentColumn>
      <p className="text-xl text-gray-500 pb-2">Books are my primary source of knowledge, I like to deep dive in technical books and occasional nonfiction, both in portuguese and in english. Here's you can find what I'm currently reading:</p>
      
        <hr />

        <div className="grid grid-cols-2 xs:grid-cols-1 gap-2 xs:gap-4">
        {currentlyReadingBooks.map((book) => (
          <a href={book.book.link} target="_blank" rel="noreferrer" className="w-full flex hover:shadow-lg mr-2" css={{height:`145px`}} key={book.book.id}>
            <div className="h-24 sm:h-32 lg:h-auto lg:w-24 flex-none bg-cover text-center overflow-hidden sm:max-w-sm sm:inline-block" css={{height:`145px`,width:`98px`}} >
            <img className="w-full cover" src={book.book.image_url} alt={book.book.title}  /> 
            </div>
            <div className="bg-gray-100 w-full p-3 flex flex-col justify-between leading-normal sm:inline-block">
              <div className="mb-8">
                <div className="text-gray-900 text-lg mb-2">{cleanBookTitle(book.book.title)}</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{book.book.authors[0].name}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
        </div>
        

        <hr />
        <br />
        <p className="mt-4 text-xl text-gray-500 pb-2 ">These are the last 10 books I've read:</p>

        <div className="grid grid-cols-2 xs:grid-cols-1 gap-3 xs:gap-4">
        {readBooks.map((review) => (
          <a href={review.book.link} target="_blank" rel="noreferrer" className="bg-gray-100 w-full flex hover:shadow-lg mr-2" css={{height:`145px`}} key={review.book.id}>
            <div className="lg:w-24 flex-none bg-cover text-center overflow-hidden sm:max-w-sm sm:inline-block" >
            <img className="object-none object-center" css={{height:`145px`,width:`98px`}} src={review.book.image_url} alt={review.book.title}  /> 
            </div>
            <div className="w-full p-3 inline-grid content-between">
              <div className="text-gray-900 text-lg mb-2">
                {cleanBookTitle(review.book.title)}
              </div>
              <div className="flex justify-between text-sm">
                  <p className="text-gray-900 leading-none">{review.book.authors[0].name}</p>
                  <p dangerouslySetInnerHTML={{__html: (ratingYellowStar.repeat(review.rating)+ratingGrayStar.repeat(5-review.rating))}}></p>
              </div>
            </div>
          </a>
        ))}
        </div>

        <p className="text-xl text-gray-500 py-2 ">You can follow my reviews and reading on <a className="text-yellow-600 underline hover:text-yellow-400" href="https://www.goodreads.com/ftpaul">my Goodreads account</a>.</p>
        </ContentColumn>
        <Footer />
  </>
  )
}


function cleanBookTitle(title) {
  if (title.indexOf(':') > 0 && title.length > 52) {
    const a = title.substring(0, title.indexOf(':'))
    console.log(a)
    return a
  }
  return title
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