/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Navbar from "./components/navigation/Navbar"
import ResponsiveNavigation from "./components/navigation/ResponsiveNavigation"
import HeroSection from "./components/heroSection/HeroSection"
import FeaturesSection from "./components/Features/FeaturesSection"
import Sponsor from "./components/Sponsor/Sponsor"
import Newsletter from "./components/Newsletter/Newsletter"

function App() {
  const [isResponsive, setIsResponsive] = useState(true)

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive)
  }

  return (
    <>
      <Navbar isResponsive={isResponsive} toggleResponsive={toggleResponsive} />
      <ResponsiveNavigation
        isResponsive={isResponsive}
        toggleResponsive={toggleResponsive}
      />
      <HeroSection />
      <FeaturesSection />
      <Sponsor />
      <Newsletter />
    </>
  )
}

export default App
