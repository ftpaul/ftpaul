import React from 'react'
import TopBar from '../components/navigation/TopBar'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/navigation/Footer'
import './../styles/global.css'
import { Analytics } from "@vercel/analytics/react"


function MainLayout({ children }) {
  return (
    
    <html lang="en">
      <body>
        <TopBar />
        <Navigation />
        {children}
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}

export default MainLayout;