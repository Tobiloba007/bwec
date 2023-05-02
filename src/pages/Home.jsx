import React, { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Section2 from '../components/secction2/Section2'
import Section1 from '../components/section1/Section1'
import Section3 from '../components/section3/Section3'
import Section4 from '../components/section4/Section4'
import Section5 from '../components/section5/Section5'
import Testimonials from '../components/testimonials/Testimonials'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Testimonials />
        <div id='contacts'>
          <Footer />
        </div>
    </div>
  )
}

export default Home