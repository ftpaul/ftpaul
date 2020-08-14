import React from "react"
import { Link } from 'gatsby'


export default () => (

    <div className="flex xs:flex-col-reverse flex-wrap w-full mx-auto pt-8 xs:pt-0 px-2 bg-yellow-600">
    <div className="w-1/2 lg:w-1/2 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 ">
      <Link to="/resume/" className="text-3xl xs:text-2xl font-extrabold tracking-tight text-white hover:underline hover:ml-4">
        <img src="/about/paulo-teixeira-resume-screenshot.png" alt="Paulo Teixeira | ftpaul.io" className="shakeEffect w-96 mx-auto z-20" />
      </Link>
    </div>
    <div className="w-1/2 lg:w-1/2 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 ">
      <Link to="/resume/" className="text-3xl xs:text-2xl font-extrabold tracking-tight text-white hover:underline hover:ml-4">
        <h2 className="py-24 xs:py-12 lg:text-left sm:text-center xs:text-center xs:mx-auto">See my resume &rarr;</h2>
      </Link>
    </div>
  </div>
  
)

