import React from 'react'
import Navigation from './navigation/Navigation'
import Footer from './navigation/Footer'
import './../styles/global.css'
import { Analytics } from "@vercel/analytics/react"


function OldLayout({ children }) {
  return (
      <div>
        <Navigation />
        {children}
        <Footer />
        <Analytics/>
      </div>
  )
}

export default OldLayout;