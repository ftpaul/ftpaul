import React from 'react'
import YellowTopBar from '../components/navigation/YellowTopBar'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/navigation/Footer'
import './../styles/global.css'


function MainLayout({ children }) {
  return (
    
    <html lang="en">
      <body>
        <YellowTopBar />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default MainLayout;