import React from "react"
//import Img from "gatsby-image"
//import { GatsbyImage } from "gatsby-plugin-image"

export default ({ headline, description, imageFluid, imageAlt }) => (

    <div className="flex flex-wrap max-w-screen-lg py-0 my-16 xs:my-6 mx-auto px-4 sm:px-0">

      <div className="flex w-1/2 xs:w-full items-center pr-4">
        <div className="">
          <h1 className="text-5xl text-gray-600 font-bold tracking-tight text-left m-auto">
            {headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="w-1/2 xs:w-full ">
          {/* <Img fluid={imageFluid} alt={imageAlt} className="heroSectionImage my-12 mx-auto p-0 xs:p-4" imgStyle={{ objectFit: 'contain' }} /> */}
      </div>

    </div>
  
)
 