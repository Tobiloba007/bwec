import React from 'react'
import classes from './Testimonials.module.css'
import testimony from '../../Assets/vector11.png'

const Testimonials = () => {
  return (
    <div className={classes['wrapper']}>
        
        <div className={classes['top']}>
            <p className={classes['title-1']}>Testimonials</p>
            <p className={classes['title-2']}>People Talk</p>
        </div>


        <div className={classes['middle']}>
            <p className={classes['content']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do tempor incididunt ut labore et do,Lorem ipsum dolor sit amet, consectetur 
            </p>
        </div>


        <div className={classes['bottom']}>
            <div className={classes['img-con']}>
                <img className={classes['img']} src={testimony} alt="" />
            </div>
            <div className={classes['details']}>
                <p className={classes['name']}>Larry Toms</p>
                <p className={classes['position']}>Childcare Aide</p>
            </div>
        </div>

    </div>
  )
}

export default Testimonials