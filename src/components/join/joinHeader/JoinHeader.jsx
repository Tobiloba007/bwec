import React from 'react'
import Header from '../../navbar/Header'
import classes from './JoinHeader.module.css'

const JoinHeader = () => {
  return (
    <div className={classes['wrapper']}>
       <Header />
    <p className={classes['welcome-mssg']}>Join Us</p>
  </div>
  )
}

export default JoinHeader