import React, { useEffect } from 'react'
import AboutHeader from '../components/about/aboutHeader/AboutHeader'
import AboutIntro from '../components/about/aboutIntro/AboutIntro'
import AboutMission from '../components/about/aboutMission/AboutMission'
// import AboutTeam from '../components/about/aboutTeam/AboutTeam'
import AboutVision from '../components/about/aboutVision/AboutVision'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom'

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
        <AboutHeader />
        <AboutIntro />
        <AboutVision />
        <AboutMission />
        {/* <AboutTeam /> */}
        <Footer />
    </div>
  )
}

export default About