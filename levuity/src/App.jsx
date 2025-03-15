import React from 'react'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import HeroSection from './component/Home/HeroSection'
import AboutSection from './component/Home/AboutSection'
import FeatureSection from './component/Home/FeatureSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <FeatureSection/>
      <Footer/>
    </div>
  )
}

export default App
