import React from 'react'
import classes from './AboutIntro.module.css'
import img1 from '../../../Assets/vector13.png' 
import { IoCheckmarkSharp } from 'react-icons/io5'

const items = [
    {
        icon: "IoCheckmarkSharp",
        bullets: "Food Donation"
    },
    {
        icon: "IoCheckmarkSharp",
        bullets: "Skill Acquisition"
    },
    {
        icon: "IoCheckmarkSharp",
        bullets: "Cloth Donation"
    },
    {
        icon: "IoCheckmarkSharp",
        bullets: "Health & Wellness"
    },
    {
        icon: "IoCheckmarkSharp",
        bullets: "Education"
    },
    {
        icon: "IoCheckmarkSharp",
        bullets: "Money Donation"
    },
]

const AboutIntro = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['left']}>
            <img className={classes['left-img']} src={img1} alt="" />
        </div>
        <div className={classes['right']}>
            <div className={classes['right-top']}>
                <p className={classes['right-title']}>
                   We work with people towards improving their social & economic wellbeing
                </p>
            </div>
            <div className={classes['right-middle']}>
                <p className={classes['right-paragraph']}>
                   Blooming Wells Centre door is open to immigrants in the areas of settlement, single mothers, youths and 2SLGBTIQ community, women and seniors.
                </p>
            </div>
            <div className={classes['right-bottom']}>
                {items.map((item)=>{
                    return (
                        <div className={classes['items-con']}>
                           <IoCheckmarkSharp className={classes['items-icon']} />
                             <span className={classes['items']} >{item.bullets}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AboutIntro