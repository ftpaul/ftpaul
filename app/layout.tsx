import React from 'react'
import TopBar from '../components/navigation/TopBar'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/navigation/Footer'
import './../styles/global.css'
import { Analytics } from "@vercel/analytics/react"
import AnimationWrapper from "../components/shapes/animation"
import FloatingShapes from '../components/shapes/shapes'
import Head from './head'

function MainLayout({ children }) {
  return (
    
    <html lang="en">
      <Head />
      <body>
        <AnimationWrapper>
        <TopBar />
        <Navigation />
        
        {children}
        <Footer />
        <FloatingShapes/>
        </AnimationWrapper>
        <Analytics/>
      </body>
    </html>
  );
}

export default MainLayout;