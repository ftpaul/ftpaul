import React from 'react'
import YellowTopBar from './navigation/YellowTopBar'
import Navigation from './navigation/Navigation'
import Footer from './navigation/Footer'
import './../styles/global.css'


function OldLayout({ children }) {
  return (
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
  )
}

export default OldLayout;