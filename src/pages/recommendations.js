import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation/navigation'
import SEO from '../components/seo'
import Footer from '../components/navigation/footer'
import ContentColumn from '../components/contentColumn'
import BookCard from '../components/books/bookCard'
import Img from "gatsby-image"


const BooksPage = ({ data }) => { 
  
  //const currentlyReadingBooks = data.currently_reading.edges[0].node.reviews
  const readBooks = data.read.edges[0].node.reviews.slice(0,10)
  const articles = data.articles.edges
  
  const seo  = {
    title: "Paulo Teixeira Recommendations | ftpaul.io", 
    description: "Here's a list of books, articles, videos, and others that I recommend to everyone that is into Product Management or looking for great content."
  }

  return (
  <>
  <SEO title={seo.title} description={seo.description} />
  <Navigation />

  <div className="heroWidth flex flex-wrap max-w-screen-md py-0 my-16 xs:my-6 mx-auto">



    <div className="flex w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full items-center px-4">
      <div >
        <h1 className="heroTitle text-2xl xs:text-2xl text-gray-600 font-bold tracking-tight text-left m-auto">
          Recommendations<span className="text-yellow-600">.</span> 
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400">
          Here you can find a handpicked list of books, articles, videos, and other relevant content that had a significant impact on how I approach my career and the Product Management area.
        </p>
      </div>
    </div>

    <div className="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full ">
        <Img fluid={data.heroImage.childImageSharp.fluid} alt="Paulo Teixeira | ftpaul.io" className="w-88 h-auto mx-auto p-0 xs:p-4" />
    </div>
    </div>



  <ContentColumn>

     

      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400">
        {/* This area is a work in progress. It should be updated automaticly because it's getting data from my Goodreads account and Pocket account. Follow me on those accounts for real time updates. // missing links */}
      </p>  

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

      <ContentColumn>

      <hr className="border-yellow-600 my-16" />

      <h3 className="text-gray-900 text-3xl font-bold tracking-tight mt-10">
      Articles
      </h3>

      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 ">
      Books are one of my primary sources of knowledge, to grasp new topics, and shape how I think. You can follow my reading habits on <a className="text-yellow-600 underline hover:text-yellow-400" href="https://www.goodreads.com/ftpaul">Pocket</a>.
      </p>
      </ContentColumn>
      <ContentColumn largerColumn>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 gap-3 xs:gap-4">
        {articles.map((article) => 
        <div key={article.node.url}>
          {/* {article.node.image ? <img src={article.node.image.src} alt={article.node.title} /> : ""} */}
          <a className="text-gray-400 text-xl leading-loose border-yellow-600 border-b-2 hover:text-yellow-600" href={article.node.url}>
            {article.node.title}
          </a>
          <br />
        </div>
        
        )}
      </div>

      </ContentColumn>

      <ContentColumn>
      <hr className="border-yellow-600 my-8" />
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
  articles: allPocketArticle(filter: {favorite: {eq: true}, tags: {in: "ftpaul.io"}}, limit: 10) {
    edges {
      node {
        url
        title
        favorite
        image {
          src
        }
        word_count
        tags
        articleDomain
        domainFavicon
      }
    }
  }
  heroImage: file(relativePath: {eq: "bermuda-507.png"}) {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default BooksPage