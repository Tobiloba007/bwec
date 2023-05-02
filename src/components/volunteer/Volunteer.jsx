import React from 'react'
import classes from './Volunteer.module.css'

const Volunteer = () => {
  return (
    <div className={classes['wrapper']}>

      <div className={classes['background']}>

          <div className={classes['container']}>
            <h1 className={classes['title']}>Become a Volunteer</h1>
            <form className={classes['form']} action="">
              <input className={classes['input1']} type="text" placeholder='Your Name' />
              <input className={classes['input2']} type="text" placeholder='Your Email' />
              <textarea className={classes['textarea']} placeholder='Comment'></textarea>
              <button className={classes['btn']}>SUBMIT</button>
            </form>
          </div>

      </div>

    </div>
  )
}

export default Volunteer