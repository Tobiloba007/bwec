import React from 'react'
import Header from '../../navbar/Header'
import classes from './EventsHeader.module.css'

const EventsHeader = () => {
  return (
    <div className={classes['wrapper']}>
    <Header />
    <p className={classes['welcome-mssg']}>Events</p>
  </div>
  )  
}

export default EventsHeader