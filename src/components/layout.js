import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <>
  <Helmet bodyAttributes={{
        class: 'bg-gray-100'
    }}>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
    
  <div className="flex flex-wrap content-center h-screen">
  <div className="w-screen h-2 bg-yellow-500 absolute t-0 l-0 "></div>
    <div className="mx-auto mt-2" >
      {children}
    </div>
  </div>
  </>
)
