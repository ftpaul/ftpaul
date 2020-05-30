import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.jpg'


const AboutPage = ({ data }) => { return (
  <>
  <Helmet bodyAttributes={{
        class: 'bg-gray-100 font-lato'
    }}>
    <link rel="icon" href={favicon} />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
  <div className="w-screen h-2 bg-yellow-500 absolute t-0 l-0"></div>
  <div className="flex flex-wrap max-w-screen-md mx-auto pt-32 px-2">
    <div className="" >
      <h1 className="text-4xl text-gray-600 pb-6">Paulo Teixeira<span className="font-bold text-yellow-600">.</span></h1>
      <p className="text-2xl text-gray-500 pb-2">Driven by outstanding experiences and meaningful collaborations, I am a Product Manager with a dynamic background as developer and marketer. I have 5+ years of experience working in high-growth tech organizations such as Unbabel and Landing.job.</p>
      <p className="text-2xl text-gray-500 pb-2">I'm currently looking for new challenges that allow me to work with multidisciplinary teams, developing products in the growth stage (needs improvement). You can reach out to me on LinkedIn or via e-mail.</p>
    </div>
  </div>
  </>
  )
}

// export const query = graphql`
// {
//   file(relativePath: {eq: "paulo-teixeira-square.jpg"}) {
//     childImageSharp {
//       fixed {
//         src
//       }
//     }
//   }
// }
// `

export default AboutPage