import react from "react"
import Section from './Section'


const Contact = () => (

<Section>
 
<div className="pb-16 pt-8 xs:pt-16 bg-white">
  <div className="max-w-screen-xl mx-auto sm:px-6">
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      How can we synergize?
      </h3>
    </div>

    <div className="mt-10 items-center">
      <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-yellow-600 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                  </div>
                </div>
                <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">Connecting</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                  I believe in connecting deeply with humans and that we can learn with everyone. I am the peer who can help you to overcome your challenges.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-yellow-600 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="arrows-expand w-4 h-4">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">Mentoring</h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    I help individuals to have a meaningful career and to navigate through different contexts in their lives.
                  </p>
                  
                </div>
              </div>
            </li>
            
          </ul>
          </div>
          <div className="mt-10 items-center text-center">
              <p className="text-base leading-7 text-gray-400"> Reach out to: &nbsp;</p>
              <h2 className="text-xl leading-8 inline font-bold tracking-tight text-gray-600 sm:leading-10">hey [at] ftpaul.io</h2>
            </div>  
        </div></div>
  </Section>
)

export default Contact