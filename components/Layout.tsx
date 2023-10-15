import Navigation from "../components/navigation/Navigation"
import YellowTopBar from "../components/navigation/YellowTopBar"
import Footer from "../components/navigation/Footer"

import Section from "./Section"
import "./../styles/global.css"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <YellowTopBar />
        <Navigation />
          <Section>
            {children}
          </Section>
        <Footer />

    </>
  )
}
