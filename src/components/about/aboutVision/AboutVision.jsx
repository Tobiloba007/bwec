import React from 'react'
import classes from './AboutVision.module.css'
import img1 from '../../../Assets/vector14.png'
import img2 from '../../../Assets/vector15.png'

const AboutVision = () => {
  return (
    <div className={classes['wrapper']}>
        {/* <div className={classes['left-con']}> */}
        <div className={classes['left']}>
            <p className={classes['title']}>
               Vision
            </p>
            <p className={classes['sub-title']}>
                Our Vision
            </p>
            <p className={classes['paragraph']}>
                is to provide practical assistance, to serve and provide basic life amenities such as food, clothing and greater learning opportunities for individuals, people in marginalized  communities with diverse and intersecting identities/issues who continue to live in poverty and lack access to comprehensive services.
            </p>
            <button className={classes['vision-btn']}>
                JOIN US
            </button>
        </div>
        {/* </div> */}

        <div className={classes['right']}>
            <img className={classes['img-1']} src={img1} alt="" />
            <img className={classes['img-2']} src={img2} alt="" />
        </div>

    </div>
  )
}

export default AboutVision