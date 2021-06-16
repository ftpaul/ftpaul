import React from "react"
import { Link } from 'gatsby'

const Button = ({ children, to, transparent, yellow }) => (

  <Link className={(transparent && !yellow) ? `inline-flex items-center justify-center text-lg tracking-tight hover:text-yellow-600 px-4 pt-2 pb-3 hover:bg-white rounded-md bg-transparent border-2 border-white text-white` : 
    ((transparent && yellow) ? `inline-flex items-center justify-center text-lg tracking-tight hover:text-white px-4 pt-2 pb-2 hover:bg-yellow-600 rounded-md bg-transparent border-2 border-yellow-600 text-yellow-600` : 
    `inline-flex items-center justify-center text-lg tracking-tight hover:text-gray-500 px-4 pt-2 pb-2 hover:bg-transparent rounded-md bg-white border-2 border-white text-gray-500`)}
    to={to}>
    
     {children}
    
  </Link>
  
)
 
export default Button