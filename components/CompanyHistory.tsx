import Button from './Button'

 const CompanyHistory = () => (

<div className="py-20 xs:py-20 bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        What have I been up to
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 lg:mx-auto">
        Scalling companies in the digital world for over than six years.
      </p>
    </div>

    <div className="flex flex-wrap mt-8 justify-center ">
          

    <div className="w-1/2 md:w-1/6 lg:w-1/6 pt-1 mb-4 text-center">
         
         <img src="/images/AppLovin.png" className="w-12 ml-auto mr-auto" width="48" height="48" alt="AppLovin" />
         <h4 className="mt-2 text-lg font-bold text-gray-900 ">
             AppLovin
         </h4>
         <p className="text-base leading-6 text-gray-500">
             Project Manager (Web)
         </p> 
         <p className="text-base  text-gray-400">
             2022 
         </p>    
       </div>

          <div className="w-1/2 md:w-1/6 lg:w-1/6 pt-1 mb-4 text-center">
         
            <img src="/images/adjust.png" className="w-12 ml-auto mr-auto" width="48" height="48" alt="Adjust" />
            <h4 className="mt-2 text-lg font-bold text-gray-900 ">
                Adjust
            </h4>
            <p className="text-base leading-6 text-gray-500">
                Web Product Manager
            </p> 
            <p className="text-base  text-gray-400">
                2021 
            </p>    
          </div>

          <div className="w-1/2 md:w-1/6 lg:w-1/6 pt-1 mb-4 text-center">
         
            <img src="/images/unbabel.png" className="w-12 ml-auto mr-auto" width="48" height="48" alt="Unbabel" />
            <h4 className="mt-2 text-lg font-bold text-gray-900 ">
                Unbabel
            </h4>
            <p className="text-base leading-6 text-gray-500">
                Product Manager
            </p> 
            <p className="text-base  text-gray-400">
                2019 - 2020
            </p>    
          </div>

          <div className="w-1/2 md:w-1/6 lg:w-1/6 pt-1 mb-4 text-center">
         
            <img src="/images/unbabel.png" className="w-12 ml-auto mr-auto" width="48" height="48" alt="Unbabel" />
            <h4 className="mt-2 text-lg font-bold text-gray-900 ">
                Unbabel
            </h4>
            <p className="text-base leading-6 text-gray-500">
                Marketing Manager
            </p> 
            <p className="text-base  text-gray-400">
                2018 - 2019
            </p>    
          </div>

          
  </div>
  </div>

  <div className="lg:text-center pt-6">
    <Button to="/resume/" yellow transparent >
      See my resume &rarr;
    </Button>
  </div>

  </div>
  
)




export default CompanyHistory