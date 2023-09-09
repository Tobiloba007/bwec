import React from 'react'
import Header from '../navbar/Header'
import classes from './Section1.module.css'

const Section1 = () => {
  return (
    <div className={classes['wrapper']}>
        <Header />
        <div className={classes['title-con']}>
            <h1 className={classes['title']}>Little Efforts Towards <br />Fundamental Changes</h1>
        </div>
        <div className={classes['title-words-con']}>
            <p className={classes['title-words']}>
                We help, serve and provide basic necessities like food, clothing, and more learning opportunities to  individuals and people in marginalized  communities dealing with various intersecting identities and other  issues associated with poverty.
            </p>
        </div>
        <div className={classes['btn-con']}>
          <a href="https://forms.gle/YXCcR7zyoiLQpbbs8" target="_blank" rel="noopener noreferrer">
            <button className={classes['btn-left']}>REGISTER NOW</button>
          </a>
          <a href="https://forms.gle/yYn4RAYLiBetqqyn9" target='_blank' rel="noopener noreferrer">
            <button className={classes['btn-right']}>JOIN US</button>
          </a>
        </div>
    </div>
  )
}

export default Section1