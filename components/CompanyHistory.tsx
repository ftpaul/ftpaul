import Button from './Button'

 const CompanyHistory = ({jobHistory}) => (

<div className="py-20 xs:py-20 relative">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        What have I been up to
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 lg:mx-auto">
        Scalling companies in the digital world for over a decade.
      </p>
    </div>

    <div className="flex flex-wrap mt-8 justify-center ">


     {jobHistory.slice(0, 3).map((job) => (
        <div key={job.end_date} className="w-1/2 md:w-1/5 lg:w-1/5 pt-1 mb-4 text-center ">
           <img src={job.logo} className="w-12 ml-auto mr-auto" width="48" height="48" alt={job.company} />
         <h4 className="mt-2 text-lg font-bold text-gray-900 ">
             {job.company}
         </h4>
         <p className="text-base leading-6 text-gray-500">
             {job.role}
         </p> 
         <p className="text-base  text-gray-400">
          {job.featured_date}
         </p>   
       </div>
      ))}
         

          
  </div>
  </div>

  <div className="text-center pt-6 xs:ml-auto xs:mr-auto">
    <Button to="/resume/" yellow transparent >
      See my resume &rarr;
    </Button>
  </div>

  </div>
  
)

export default CompanyHistory