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
               We appreciate BWEC’s dedication to the area and beyond. May the Father give you strength and favor, along with all the volunteers.
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