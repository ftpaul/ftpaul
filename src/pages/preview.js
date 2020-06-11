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
      {/* <img src="/paulo-teixeira.png" className="justify-center flex h-48 w-48" /> */}
      {/* https://joaopedroreis.pt/image-content/post-4/webdevelopment-sessions%20(1%20of%201).jpg */}
      <p className="text-3xl xs:text-2xl leading-tight text-gray-500 pb-4">Hey there <span role="img" aria-label="Wave">👋🏽</span></p>
      <p className="text-2xl xs:text-xl leading-snug text-gray-500 pb-4 text-justify xs:text-left">I am a <strong>Product Manager</strong> with a dynamic background as developer and marketer, with 6+ years of experience working with web technologies. I'm passion about delivering outstanding experiences and to build meaningful collaborations that allow teams to create extraordiary work. </p>
      <img src="/paulo-teixeira-product-manager.jpg" alt="Paulo Teixeira - Product Manager" className="flex pb-4 max-w-md xs:max-w-full mx-auto" />
      <p className="text-xl xs:text-lg leading-snug text-gray-500 pb-2 text-justify xs:text-left">PS: I'm currently looking for new challenges as a Product Manager or Owner, if you're looking for someone to deliver great digital products get in touch with me via&nbsp; 
        <a href="https://linkedin.com/in/ftpaul" className="text-yellow-600 underline hover:text-yellow-400">LinkedIn</a> or&nbsp;
        <a href="mailto:ftpaul@gmail.com" className="text-yellow-600 underline hover:text-yellow-400">e-mail</a>.
      </p>
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