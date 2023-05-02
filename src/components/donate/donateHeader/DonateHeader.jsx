import React from 'react'
import Header from '../../navbar/Header'
import classes from './DonateHeader.module.css'

const DonateHeader = () => {
  return (
    <div className={classes['wrapper']}>
       <Header />
    <p className={classes['welcome-mssg']}>Donate</p>
  </div>
  )
}

export default DonateHeader