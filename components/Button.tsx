import Link from "next/link";

const Button = ({ to, transparent, yellow, children }) => (

  <Link className={(transparent && !yellow) ? `inline-flex text-lg font-bold tracking-tight border-yellow-600 border-b-2 text-white hover:border-white border-b-2 transition-colors duration-300 ease-in` : 
    ((transparent && yellow) ? `inline-flex items-center justify-center text-lg tracking-tight hover:text-white px-4 pt-2 pb-2 hover:bg-yellow-600 rounded-md bg-transparent border-2 border-yellow-600 text-yellow-600` : 
    `inline-flex items-center justify-center text-lg tracking-tight hover:text-gray-500 px-4 pt-2 pb-2 hover:bg-transparent rounded-md bg-white border-2 border-white text-gray-500`)}
    href={to}>
    
     {children}
    
  </Link>
  
)
 
export default Button