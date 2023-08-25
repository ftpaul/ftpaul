import Navigation from "../components/navigation/Navigation"
import YellowTopBar from "../components/navigation/YellowTopBar"
import Footer from "../components/navigation/Footer"
import Layout from "../components/Layout"
import "./../styles/global.css"
import Section from "../components/Section"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Section>
        {children}
      </Section>
    </Layout>
  )
}
