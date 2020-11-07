import React from "react"
import { Link } from "gatsby"


export default () => (

<div className="py-20 xs:py-20 bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Side Projects
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 lg:mx-auto">
      I enjoy to dedicate time to explore ideias of micro products or just build tools to impact my daily life. It can be a simple spreadsheet or a more complex tool. 
      </p>
    </div>

    <div className="flex flex-wrap mt-8 justify-center ">
          

          <div className="w-1/4 lg:w-1/4 sm:w-1/3 xs:w-full pt-1 mb-4  mr-8">
            <Link to="/chatbot/">
            <img src="/writing/ftpaul-chatbot.png" alt="ftpaul.io chatbot" />
            <h4 className="mt-2 text-lg font-bold text-gray-900 ">
                ftpaul.io chatbot
            </h4>
            </Link>
            <p className="mt-2 text-base leading-6 text-gray-500">
                Built a simple chatbot to help people interact with a virtual and limited version of myself!
            </p>    
          </div>

          <div className="w-1/4 lg:w-1/4 sm:w-1/3 xs:w-full pt-1 mb-4">
            <Link to="/writing/okrs-as-persona-goal-method">
              <img src="/writing/00-okrs-personal-goals-setting-method.jpeg" alt="OKRs Tracking Template" />
              <h4 className="mt-2 text-lg font-bold text-gray-900 ">
                  OKRs Tracking Template
              </h4>
            </Link>
            <p className="mt-2 text-base leading-6 text-gray-500">
                Since 2017, I am using OKRs as a personal goal method setting. Here you can find a template spreadhseet to track them.  
            </p>    
          </div>
          
          
          
          
  </div>
  </div>
  </div>
  
)

