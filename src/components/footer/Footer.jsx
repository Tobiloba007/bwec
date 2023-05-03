import React from 'react'
import classes from './Footer.module.css'
import logo from '../../Assets/logo.png'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={classes['wrapper']}>
    <div className={classes['container']}>

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
                <Link to='/'
                className={classes['middle-links']}>Home</Link>
                <Link to='/about'
                 className={classes['middle-links']}>About Us</Link>
                <Link to='/programs'
                className={classes['middle-links']}>Programs</Link>
                <Link to='/events' 
                className={classes['middle-links']}>Events</Link>
                <Link className={classes['middle-links']}>Contact Us</Link>
            </div>

            <div className={classes['right']}>
               <h1 className={classes['right-title']}>Contacts</h1>
               <p className={classes['address']}>
                <IoLocationSharp className={classes['right-icon']} />
                18, Corporation Drive, Brampton Ontario, L6S 6B5, Canada.
               </p>
               <p className={classes['right-1']}>
                <MdEmail className={classes['right-icon']} />bloomingwells66@gmail.com
               </p>
               <p className={classes['right-1']}>
                <HiPhone className={classes['right-icon']} />+647-216-2728
               </p>
            </div>
        </div>

        <hr className={classes['hr']}/>

        <div className={classes['bottom']}>
            <AiOutlineCopyrightCircle className={classes['bottom-icon']} />
            <p className={classes['bottom-content']}>2023 BWEC is powered by <a href='https://www.linkedin.com/in/olajuwon-olalekan' 
            style={{color: '#FFCF24', textDecoration: 'none'}}>
              Lexcr8t
              </a></p>
        </div>

    </div>
    </div>
  )
}

export default Footer