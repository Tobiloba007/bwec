import React from 'react'
import classes from './AboutHeader.module.css'
import img1 from '../../../Assets/aboutHeader.png'
import Header from '../../navbar/Header'

const AboutHeader = () => {
  return (
    <div className={classes['wrapper']}>
      <Header />
      <p className={classes['welcome-mssg']}>Who We Are</p>
    </div>
  )
}

export default AboutHeader