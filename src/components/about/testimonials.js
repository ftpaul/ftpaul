import React from "react"


export default () => (

    <div class="py-32 sm:py-24 xs:py-24 bg-white">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      {/* <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</p> */}
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        What others say about me
      </h3>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>

    <div class="flex flex-wrap my-8">
          
          <div class="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full mx-auto pt-1 text-left pr-4 border-r-2 border-yellow-600 xs:border-r-0 xs:border-b-2 xs:pb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -ml-4 -mt-6 fill-current text-yellow-600 h-16 w-16 z-0" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
              <p class="mt-2 text-xl leading-6 italic text-gray-400 z-10 relative">
                Paulo is an ace team player and deeply cares about creating an environment in which everyone can excel. He frequently checks in with the people around him and does what is in his power to support them and remove road blocks. </p>
              <p class="mt-2 text-xl leading-6 italic text-gray-400">
                Finally, Paulo is the definition of zen. His calm and controlled nature is definitely something that affects people around him in the most positive way. His positive attitude is contagious.
              </p>
              <div className="text-base leading-6 font-medium text-gray-500 mt-4 text-left ml-2 xs:ml-0 flex  ">
                <img src="/about/chris.jpeg" alt="Chris Grabiński" className="rounded-full w-12 h-12"/>
                <p className="ml-2 text-gray-500 font-bold">Chris Grabiński <br />
                <span className="font-normal">Front-end Developer / Typeform</span>
                </p>
              </div>
            
          </div>

          <div class="w-1/2 lg:w-1/2 sm:w-1/2 xs:w-full mx-auto pt-1 pl-8 text-left xs:pl-0 xs:pt-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -ml-4 -mt-6 fill-current text-yellow-600 h-16 w-16 z-0" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
              <p class="mt-2 text-xl leading-6 italic text-gray-400 z-10 relative">
              (...) He transitioned from marketing into product management really well, he has the product mindset of understanding the problem accurately and them moving to the solution. Paulo adapts very fast to the changing conditions of the market, which often require last minute changes to on-going projects. These are never a problem but are seen as an opportunity to further improve our position.</p>
              <div className="text-base leading-6 font-medium text-gray-500 mt-4 text-left ml-2 xs:ml-0 flex ">
                <img src="/about/pedro-martinho.jpeg" alt="Pedro Martinho" className="rounded-full w-12 h-12"/>
                <p className="ml-2 text-gray-500 font-bold">Pedro Martinho <br />
                <span className="font-normal">Senior Product Manager / Loggi</span>
                </p>
              </div>
            
          </div>
          
          
  </div>
  </div>
  </div>
  
)

