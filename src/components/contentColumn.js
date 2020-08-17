import React from "react"

export default ({ children, shorterColumn }) => (

  <div className={shorterColumn ? `flex flex-wrap max-w-screen-md mx-auto pt-8 xs:pt-0 px-2` : `flex flex-wrap max-w-screen-lg mx-auto pt-8 xs:pt-0 px-2`}>
    
     {children}
  </div>
  
)
 