
import Section from './Section'
import Link from "next/link";


const Contact = () => (

<Section className="bg-gray-100">
 
<div className="pb-16 pt-8 xs:pt-16">
  <div className="max-w-screen-xl mx-auto sm:px-6">
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Get in touch via&nbsp;
      <Link href="https://www.linkedin.com/in/ftpaul/" target="_blank" className="text-green-600 hover:text-green-400 hover:border-b-4 border-b-2 font-bold transition duration-500 ">LinkedIn</Link> 
      </h3>
    </div>
          
        </div></div>
  </Section>
)

export default Contact