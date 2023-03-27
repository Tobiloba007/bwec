import React from 'react'
import classes from './Footer.module.css'
import logo from '../../Assets/logo.png'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={classes['wrapper']}>

        <div className={classes['top']}>

            <div className={classes['left']}>
                <div className={classes['left-1-con']}>
                  <img className={classes['left-1']} src={logo} alt="logo" />
                </div>
                <p className={classes['left-2']}>
                   We help, serve and provide basic necessities like food, clothing, and more learning opportunities to  individuals and people in marginalized black communities with various and intersecting identities & issues who still live in poverty .
                </p>
                <div className={classes['left-3']}>
                    <TiSocialFacebookCircular />
                    <TiSocialTwitterCircular />
                    <TiSocialLinkedinCircular />
                </div>
            </div>

            <div className={classes['middle']}>
                <h1 className={classes['middle-title']}>Quick Links</h1>
                <p className={classes['middle-links']}>About Us</p>
                <p className={classes['middle-links']}>Programs</p>
                <p className={classes['middle-links']}>Services</p>
                <p className={classes['middle-links']}>Events</p>
                <p className={classes['middle-links']}>Contact Us</p>
            </div>

            <div className={classes['right']}>
               <h1 className={classes['right-title']}>Contacts</h1>
               <p className={classes['right-1']}>
                <IoLocationSharp className={classes['right-icon']} />101, Toronto, CA.
               </p>
               <p className={classes['right-1']}>
                <MdEmail className={classes['right-icon']} />addyouremail.com
               </p>
               <p className={classes['right-1']}>
                <HiPhone className={classes['right-icon']} />+44 980404535
               </p>
            </div>
        </div>

        <hr className={classes['hr']}/>

        <div className={classes['bottom']}>
            <AiOutlineCopyrightCircle className={classes['bottom-icon']} />
            <p className={classes['bottom-content']}>2023 BWEC is powered by <span style={{color: '#FFCF24'}}>Lexcr8t</span></p>
        </div>

    </div>
  )
}

export default Footer