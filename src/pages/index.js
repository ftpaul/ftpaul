import React from "react"
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'



const AboutPage = ({ data }) => { return (
  <>
  <SEO />
    
  <Navigation />
  <ContentColumn>

    <div className="w-4/6 lg:w-4/6 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
    <p className="text-3xl xs:text-2xl leading-tight text-gray-500 py-4">Hey there <span role="img" aria-label="Wave">👋🏽</span></p>
        <p className="text-2xl xs:text-xl leading-snug text-gray-500 pb-4 xs:text-left">My name is <strong>Paulo Teixeira</strong>, and I am a Product Manager with a solid background in product, marketing, and management. I love to build methodologies that drive value to individuals and organizations. I aim to impact people with purposeful experience.</p>
    </div>

    <div className="w-2/6 lg:w-2/6 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
    {/* <img src="/paulo-teixeira-smiling.gif" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 xs:w-20 xs:h-20 mt-4  z-10 rounded-full" /> */}
        {/* <img src="/paulo-teixeira-resume.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 xs:w-20 xs:h-20  z-20 rounded-full -mt-64 xs:-mt-20  hover:opacity-0 transition ease-linear duration-500" /> */}
        <img src="/paulo-teixeira-resume.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 h-64 mx-auto z-20 rounded-full" />
    </div>

    {/* <div className="w-full pt-16 pr-1 xs:pr-2 ">
        <h2 className="text-3xl xs:text-2xl leading-tight text-gray-500 py-4">The features you will fall in love with</h2>
        {/* <p className="text-lg xs:text-lg leading-snug text-gray-400 pb-4 xs:text-left">I am Paulo Teixeira, a <strong>Product Manager</strong> with a dynamic solid background in product, marketing, and in management. When I am not working I like to code, and build processes and methodologies. </p> 

        <ul className="text-lg list-disc pl-6 pb-4 exp-ul-bullets">
          <li><strong>Product</strong> - From defining MVPs to launch them in the market. I am an experienced product person that looks to focus on building the business outcomes and user experience.</li>
          <li><strong>Growth</strong> - Focusing on the intersection between Product and Marketing, I impact the company's growth by optimizing experiences that drive value.</li>
          <li><strong>Management</strong> - Throughout my career, I've empowered individuals and teams to be at their best. People are key in any strategy, and I make sure they know that.</li>
          <li><strong>Methodologies</strong> - I see everything as a learning opportunity. I love to build and iterate methodologies that help us prosper in chaotic environments and situations. </li>
        </ul>
    </div> */}


  <div class="py-32 bg-white">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      {/* <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Transactions</p> */}
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        The features you will fall in love with
      </h3>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>

    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
        <li>
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Product</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
              From defining MVPs to launch them in the market. I am an experienced product person that looks to focus on building the business outcomes and user experience.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Growth</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Focusing on the intersection between Product and Marketing, I impact the company's growth by optimizing experiences that drive value.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Management</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Throughout my career, I've empowered individuals and teams to be at their best. People are key in any strategy, and I make sure they know that.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">Methodologies</h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
              I see everything as a learning opportunity. I love to build and iterate methodologies that help us prosper in chaotic environments and situations.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
  </ContentColumn>

  <div className="flex flex-wrap w-full mx-auto pt-8 xs:pt-0 px-2 bg-yellow-600">
    <div className="w-1/2 lg:w-1/2 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
      <img src="/paulo-teixeira-resume-screenshot.png" alt="Paulo Teixeira | ftpaul.io" className="w-64 mx-auto z-20" />
    </div>
    <div className="w-1/2 lg:w-1/2 sm:w-full xs:w-full pt-4 pr-1 xs:pr-2 ">
      <h2 className="text-3xl xs:text-2xl leading-tight text-white py-16 xs:py-4" >See my resume &rarr;</h2>
    </div>
  </div>
    
    
  <div class="py-32 bg-white">
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

    <div class="flex my-8">
          
          <div class="w-1/2 lg:w-1/2 sm:w-full xs:w-full mx-auto pt-1  ">
                {/* <img src="https://chrisgrabinski.com/wp-content/uploads/2016/10/chris-grabinski-hero-img.png" classNAme="rounded-md" /> */}
              <h4 class="text-lg leading-6 font-medium text-gray-600">Chris Granbrisky<br/> <span classNAme="text-gray-500">Front-end Developer at Typeform</span> </h4>
              <p class="mt-2 text-lg leading-6 text-gray-500">
                Paulo is an ace team player and deeply cares about creating an environment in which everyone can excel. He frequently checks in with the people around him and does what is in his power to support them and remove road blocks. </p>
              <p class="mt-2 text-lg leading-6 text-gray-500">
                Finally, Paulo is the definition of zen. His calm and controlled nature is definitely something that affects people around him in the most positive way. His positive attitude is contagious.
              </p>
            
          </div>
          
          
  </div>
  </div>
  </div>

 
  <div class="bg-gray-50">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br/>
      <span class="text-yellow-600">Start your free trial today.</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Get started
        </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-yellow-600 bg-white hover:text-yellow-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Learn more
        </a>
      </div>
    </div>
  </div>
</div>

      
    
      
      
      
      <Footer />
  </>
  )
}

export const query = graphql`
{
  file(relativePath: {eq: "paulo-teixeira-product-manager.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default AboutPage