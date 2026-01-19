
import ImageGallery from "../components/ImageGallery"
import Features from "../components/Features"
import CompanyHistory from "../components/CompanyHistory"
import jobHistory from '../content/jobHistory.json'


export const metadata = {
  title: 'Paulo Teixeira · Senior Project Manager | Product Owner',
  openGraph: {
    title: 'Paulo Teixeira · Senior Project Manager | Product Owner',
    description: 'A Senior Project Manager with a solid background in engineering and business.',
    images: ['/images/og-image.jpg'], 
    type: 'website',
  }
}

export default async function IndexPage() {

    return (
      <>
      


      <div className="relative flex flex-wrap max-w-screen-lg py-0 my-16 xs:my-6 mx-auto px-4 ">

        

        {/* <div className="blob-shape"></div> */}

        <div className="w-2/3 lg:w-3/4 sm:w-full xs:w-full  ">
          

          <h1 className="text-5xl font-bold tracking-tight text-green-600 mb-6 ">Creative problem-solver at the intersection of design, tech, and people. Based in Berlin 🇩🇪</h1>
          
          <h2 className="text-xl xs:text-2xl text-gray-600 pb-4 text-left m-auto">
          I thrive in the spaces where disciplines meet, bringing together design thinking, technical strategy, and marketing to solve complex challenges. With a strong tech and marketing background, I lead cross-functional teams globally to align technical capabilities with business goals and user needs. 
          {/* I’m committed to delivering results with clarity, from detailed roadmaps to accessible documentation, making every project a strategic win for the organization. */}
          </h2>
          <h2 className="text-xl xs:text-2xl text-gray-600 pb-4 text-left m-auto">
          My approach is collaborative and human-centered: I foster agile workflows, build trusted stakeholder relationships, and cultivate team environments where diverse perspectives drive innovative solutions. I believe the magic happens at intersections, and that's where I do my best work.
          </h2>
          
        </div>

      
      </div>

      <ImageGallery />
      
      <Features />
              
      <CompanyHistory jobHistory={jobHistory} />

    </>
    )
  }