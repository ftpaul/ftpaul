
import Section from './Section'
import Link from "next/link";


const Contact = () => (

<Section>
 
<div className="pb-16 pt-8 xs:pt-16 bg-white">
  <div className="max-w-screen-xl mx-auto sm:px-6">
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      How can to get in touch 
      </h3>
    </div>
          <div className="mt-10 items-center text-center">
              {/* <p className="text-base leading-7 text-gray-400"> Reach out to: &nbsp;</p> */}
              <h2 className="text-xl leading-8 inline font-bold tracking-tight text-gray-600 sm:leading-10">
              <Link href="https://www.linkedin.com/in/ftpaul/" className="text-green-600 hover:text-green-400 hover:border-b-4 border-b-2 text-lg font-bold transition duration-500 ">LinkedIn</Link> 
              &nbsp;or&nbsp; 
              <Link href="mailto:hey+website@pauloteixeira.de" className="text-green-600 hover:text-green-400 hover:border-b-4 border-b-2 text-lg font-bold transition duration-500 ">email</Link>.</h2>
            </div>  
        </div></div>
  </Section>
)

export default Contact