import Navigation from "../components/navigation/Navigation"
import YellowTopBar from "../components/navigation/YellowTopBar"
import Footer from "../components/navigation/Footer"
import "./../styles/global.css"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <YellowTopBar />
        <Navigation />

            {children}

        <Footer />

      </body>
    </html>
  )
}
