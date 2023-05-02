import React, { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import ProContent from '../components/programs/proContent/ProContent'
import ProHeader from '../components/programs/proHeader/ProHeader'
import Volunteer from '../components/volunteer/Volunteer'
import { useLocation } from 'react-router-dom'

const Programs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <ProHeader />
        <ProContent />
        <Volunteer />
        <Footer />
    </div>
  )
}

export default Programs