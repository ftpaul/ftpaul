import React from "react"
import Button from '../button'
import { Link } from 'gatsby'


const ResumeCTA = () => (

    <div className=" w-full  py-10 bg-yellow-600">
      <div className="max-w-screen-xl flex-wrap flex mx-auto justify-center xs:px-6">
        <div className="w-1/3 lg:w-1/3 sm:1/2 xs:w-full pt-4 xs:pr-2 items-center flex">
          <div>
          <h4 className="text-2xl leading-8 font-bold tracking-tight text-white ">
          Have a glance at my career path and some of my achievements.
          </h4>
          <p className="my-4 text-lg leading-6 text-white">
          
            </p>    
          <Button to="/resume/" transparent >
            See my resume &rarr;
          </Button>
          </div>
        </div>
        <div className="w-1/3 lg:w-1/3 sm:1/2 xs:w-full pt-4 pr-1 xs:pr-2 ">
          <Link to="/resume/" className="text-3xl xs:text-2xl font-extrabold tracking-tight text-white hover:underline hover:ml-4">
            <img src="/about/resume.jpg" alt="Paulo Teixeira Resume CV | ftpaul.io" className="shakeEffect h-64 mx-auto z-20 transform  rotate-6" /> 
          </Link> 
        </div>
    </div>
  </div>
  
)


export default ResumeCTA