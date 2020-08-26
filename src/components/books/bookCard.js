import React from "react"


const ratingYellowStar = `<span class="text-yellow-600">★</span>`
const ratingGrayStar = `<span class="text-gray-400">★</span>`


export default ({ link, title, author, rating, image_url }) => (

    <a href={link} target="_blank" rel="noreferrer" className="bg-gray-100 w-full flex hover:shadow-lg mr-2" css={{height:`145px`}}>
        <div className="lg:w-24 flex-none bg-cover text-center overflow-hidden sm:max-w-sm sm:inline-block" >
        <img className="object-none object-center" css={{height:`145px`,width:`98px`}} src={image_url} alt={title}  /> 
        </div>
        <div className="w-full p-3 inline-grid content-between">
        <div className="text-gray-900 text-lg mb-2">
            {cleanBookTitle(title)}
        </div>
        <div className="flex justify-between text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
            {rating ? (<p dangerouslySetInnerHTML={{__html: (ratingYellowStar.repeat(rating)+ratingGrayStar.repeat(5-rating))}}></p>) : false}
            
        </div>
        </div>
    </a>
  
)


function cleanBookTitle(title) {
    if (title.indexOf(':') > 0 && title.length > 52) {
      const a = title.substring(0, title.indexOf(':'))
      //console.log(a)
      return a
    }
    return title
  }