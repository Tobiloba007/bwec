import React from 'react'
import classes from './Section4.module.css'
import { IoMdTime } from 'react-icons/io'
import rightImg from '../../Assets/vector9.png'
import { events } from './events'
import { useNavigate } from 'react-router-dom'

const Section4 = () => {

    const navigate = useNavigate();
    
  return (
    <div className={classes['wrapper']}>
                    {/* TITLE */}
        <div className={classes['top-con']}>
            <p className={classes['top-title']}>Upcoming</p>
            <p className={classes['top-words']}>Events</p>
        </div>

                      {/* BODY */}
        <div className={classes['bottom-con']}>
            <div className={classes['bottom-left']}>
         {events.map((item)=> {
            return(
                <div className={classes['bottom-left-item']}>
                    <div className={classes['bottom-left-item-con']}>
                       <div className={classes['left-item']}>
                           <h1 className={classes['left-item-day']}>{item.day}</h1>
                           <p className={classes['left-item-month']}>{item.month}</p>
                       </div>
                       <div className={classes['right-item']}>
                           <p className={classes['right-item-1']}>
                            <IoMdTime className={classes['right-item-icon']} />
                            {item.time}</p>
                           <p className={classes['right-item-2']}>{item.title}</p>
                           <p className={classes['right-item-3']}>{item.words}</p>
                       </div>
                    </div>
                </div>
                   )
                 })
           }
            </div>


            <div className={classes['bottom-right']}>
                <div className={classes['bottom-right-con']}>
                    <div className={classes['bottom-right-top']}>
                        <img className={classes['bottom-top-img']} src={rightImg} alt="" />
                        <button className={classes['bottom-top-btn']}>01 Feb.</button>
                    </div>
                    <div className={classes['bottom-right-bottom']}>
                        <p className={classes['right-bottom-1']}>
                        <IoMdTime className={classes['right-item-icon']} />
                            09:00 am - 11:00 am
                        </p>
                        <p className={classes['right-bottom-2']}> Medical Outreach</p>
                        <p className={classes['right-bottom-3']}>We are offering free medical check up to communities.</p>
                        <a href="https://forms.gle/yYn4RAYLiBetqqyn9" target="_blank" rel="noopener noreferrer">
                           <button className={classes['right-bottom-btn']}>JOIN US</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Section4