import React from 'react'
import classes from './Section2.module.css'
import vector1 from '../../Assets/vector1.png'
import vector2 from '../../Assets/vector2.png'
import vector3 from '../../Assets/vector3.png'

const Section2 = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['top']}>
            <p className={classes['top-title']}>
               We believe that we can save more lives with you
            </p>
            <div className={classes['top-card-con']}>
                             {/* CARD 1 */}
                <div className={classes['top-card1']}>
                    <div className={classes['top-img-div1']}>
                    <img className={classes['top-img1']} src={vector1} alt="" />
                    </div>
                    <p className={classes['top-card-title']}>Donate</p>
                    <p className={classes['top-card-words']}>Be a reason for someone happiness</p>
                    <button className={classes['top-card-btn1']}>DONATE NOW</button>
                </div>
                             {/* CARD 2 */}
                <div className={classes['top-card1']}>
                    <div className={classes['top-img-div2']}>
                    <img className={classes['top-img1']} src={vector2} alt="" />
                    </div>
                    <p className={classes['top-card-title']}>Volunteer</p>
                    <p className={classes['top-card-words']}>Be a reason for someone happiness</p>
                    <button className={classes['top-card-btn2']}>JOIN US</button>
                </div>
                             {/* CARD 3 */}
                <div className={classes['top-card1']}>
                    <div className={classes['top-img-div3']}>
                    <img className={classes['top-img1']} src={vector1} alt="" />
                    </div>
                    <p className={classes['top-card-title']}>Support</p>
                    <p className={classes['top-card-words']}>Be a reason for someone happiness</p>
                    <button className={classes['top-card-btn3']}>DONATE NOW</button>
                </div>
            </div>
        </div>

        <div className={classes['bottom']}>
            <div className={classes['bottom-left']}>
                <img className={classes['bottom-img']} src={vector3} alt="" />
            </div>
            <div className={classes['bottom-right']}>
                <p className={classes['bottom-about']}>About Us</p>
                <p className={classes['bottom-title']}>We work for people to give them a happy life</p>
                <p className={classes['bottom-words']}>
                   Blooming Wells Centre is about focusing on empowering individuals by providing necessary tools of support and helping them to take little steps towards acquiring necessary skills that will transform their lives. Our purpose is to inspire and engage our youths and provide ongoing support to overcome various life barriers that may have been preventing them from living a fulfilling life.
                </p>
                <button className={classes['bottom-btn']}>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Section2