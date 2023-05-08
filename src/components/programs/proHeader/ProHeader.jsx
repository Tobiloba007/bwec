import React from 'react'
import Header from '../../navbar/Header'
import classes from './ProHeader.module.css'

const ProHeader = () => {
  return (
    <div className={classes['wrapper']}>
       <Header />
       <p className={classes['welcome-mssg']}>Programs</p>
    </div>
  )
}

export default ProHeader