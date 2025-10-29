

const Section = ({ children, className = "" }) => (

  <div className={` ${className}`}>
    <div className={`max-w-screen-lg mx-auto pt-8 xs:pt-0 px-4 sm:px-0`} >
      
       {children}
      
    </div>
  </div>
    
  )
   
export default Section