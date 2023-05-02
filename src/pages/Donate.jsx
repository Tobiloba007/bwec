import React, { useEffect } from 'react'
import DonateHeader from '../components/donate/donateHeader/DonateHeader'
import DonateContent from '../components/donate/donateContent/DonateContent'
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom'

const Donate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <DonateHeader />
        <DonateContent />
        <Footer />
    </div>
  )
}

export default Donate