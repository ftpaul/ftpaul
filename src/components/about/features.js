import React from "react"
import ContentColumn from '../contentColumn'


export default () => (

<ContentColumn>
  <div className="pb-32 pt-0 xs:pt-16 bg-white">
  <div className="max-w-screen-xl mx-auto sm:px-6">
    <div className="lg:text-center">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        The features you will fall in love with
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 lg:mx-auto">
        My diverse background brings a together a unique set of competencies. 
      </p>
    </div>

    <div className="mt-10">
      <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <li>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="map w-6 h-6">
                  <path fillule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Strategic thinking</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
              Thinking about the long term and defining strategy are at the core of how I act. I make the connection between what we do daily with the long-term vision.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="arrows-expand w-6 h-6">
                    <path fillule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Building structure</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
              I love to build and iterate methodologies that help people thrive in chaotic environments and situations. Growing implies a constant change, and it's crucial to adapt.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                  <path fillule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Solving problems</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
               I challenge myself and those around me to get to the root cause and to be resourceful. Building a complex solution it's easy, but making it simple it's harder. 
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10 md:mt-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
              </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Outcomes oriented</h4>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Launching a feature is great, but what matters is the impact generated by what we do on the users, customers, and business. This is where the focus should be.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
  </ContentColumn>
)

