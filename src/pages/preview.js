import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.jpg'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import ContentColumn from '../components/contentColumn'


const AboutPage = ({ data }) => { return (
  <>
  <Helmet bodyAttributes={{
        class: 'bg-gray-100 font-lato'
    }}>
    <link rel="icon" href={favicon} />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
  <Navigation />
  <ContentColumn>
      <p className="text-2xl text-gray-500 pb-2">Driven by outstanding experiences and meaningful collaborations, I am a Product Manager with a dynamic background as developer and marketer. I have 5+ years of experience working in high-growth tech organizations such as Unbabel and Landing.jobs.</p>
      <p className="text-2xl text-gray-500 pb-2">I'm currently looking for new challenges that allow me to work with multidisciplinary teams, developing products in the growth stage (needs improvement). You can reach out to me on LinkedIn or via e-mail.</p>
      </ContentColumn>
      <Footer />
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