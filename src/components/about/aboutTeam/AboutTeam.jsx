import React from 'react'
import classes from './AboutTeam.module.css'
import img1 from '../../../Assets/vector16.png'
import img2 from '../../../Assets/vector17.png'
import img3 from '../../../Assets/vector18.png'

const AboutTeam = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['top']}>
            <p className={classes['title']}>
                Team
            </p>
            <p className={classes['sub-title']}>
                Our Team
            </p>
        </div>
        <div className={classes['bottom']}>
            <img className={classes['images']} src={img1} alt="" />
            <img className={classes['images']} src={img2} alt="" />
            <img className={classes['images']} src={img3} alt="" />
        </div>
    </div>
  )
}

export default AboutTeam