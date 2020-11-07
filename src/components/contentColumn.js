import React from "react"

export default ({ children, shorterColumn, largerColumn }) => (

  <div className={shorterColumn ? `max-w-screen-md mx-auto pt-8 xs:pt-0 px-2` : 
    (largerColumn ? `max-w-screen-xl mx-auto pt-8 xs:pt-0 px-2` : 
    `max-w-screen-lg mx-auto pt-8 xs:pt-0 px-2`)}>
    
     {children}
    
  </div>
  
)
 