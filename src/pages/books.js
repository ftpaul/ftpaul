import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.jpg'
import { graphql } from 'gatsby'


const BooksPage = ({ data }) => { 
  
  const currentlyReadingBooks = data.allGoodreadsShelf.edges[0].node.reviews
  console.log(currentlyReadingBooks)
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
    </div>
  </div>
  </>
  )
}

export const query = graphql`
{
  allGoodreadsShelf(filter: {name: {eq: "currently-reading"}}) {
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
}
`

export default BooksPage