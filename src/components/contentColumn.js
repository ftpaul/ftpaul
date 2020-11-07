import React from "react"

export default ({ children, shorterColumn, largerColumn }) => (

  <div className={shorterColumn ? `max-w-screen-md flex flex-wrap mx-auto pt-8 xs:pt-0 px-2` : 
    (largerColumn ? `max-w-screen-xl flex flex-wrap mx-auto pt-8 xs:pt-0 px-2` : 
    `max-w-screen-lg flex flex-wrap mx-auto pt-8 xs:pt-0 px-2`)}>
    
     {children}
    
  </div>
  
)
 