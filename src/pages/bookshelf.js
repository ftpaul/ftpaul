import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'
import BookCard from '../components/books/bookCard'
import HeroSection from "../components/heroSection"


const BooksPage = ({ data }) => { 
  
  
  const readBooks = data.read.edges[0].node.reviews.slice(0,10)
  
  
  const seo  = {
    title: "Paulo Teixeira Bookshelf | ftpaul.io", 
    description: "Books are one of my primary sources of knowledge, to grasp new topics, and shape how I think. Here's a list of book I recommend to everyone who's into Product."
  }

  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />

    <HeroSection
      headline="Bookshelf"
      description="Books are one of my primary sources of knowledge, to grasp new topics, and shape how I think. Here's a list of book I recommend to everyone who's into Product. "
      imageFluid={data.heroImage.childImageSharp.fluid}
      imageAlt="Bookshelf | Bermuda Illustration"
    />




    <ContentColumn>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 gap-3 xs:gap-4">
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

      <p className="my-4 max-w-2xl text-lg leading-7 text-gray-400">
        PS: Follow my reading habits on <a className="text-yellow-600 underline hover:text-yellow-400" href="https://www.goodreads.com/ftpaul">Goodreads</a>. 
      </p>
      {/* <hr className="border-yellow-600 my-8" /> */}

      <br /> 

      </ContentColumn>


      
      <Footer />
  </>
  )
}




export const query = graphql`
{
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
  heroImage: file(relativePath: {eq: "icons8-bermuda-illustration-001.png"}) {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default BooksPage