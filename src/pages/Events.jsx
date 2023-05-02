import React, { useEffect } from 'react'
import EventsHeader from '../components/eventsPage/EventsHeader/EventsHeader'
import Footer from '../components/footer/Footer'
import Section4 from '../components/section4/Section4'
import { useLocation } from 'react-router-dom'

const Events = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <EventsHeader />
        <Section4 />
        <Footer />
    </div>
  )
}

export default Events