import React from 'react'
import classes from './Section2.module.css'
import vector1 from '../../Assets/vector1.png'
import vector2 from '../../Assets/vector2.png'
import vector3 from '../../Assets/vector3.png'
import { useNavigate } from 'react-router-dom'

const Section2 = () => {

    const navigate = useNavigate();
    
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
                    <button onClick={()=>navigate('/donate')}
                    className={classes['top-card-btn1']}>DONATE NOW</button>
                </div>
                             {/* CARD 2 */}
                <div className={classes['top-card1']}>
                    <div className={classes['top-img-div2']}>
                    <img className={classes['top-img1']} src={vector2} alt="" />
                    </div>
                    <p className={classes['top-card-title']}>Volunteer</p>
                    <p className={classes['top-card-words']}>Be a reason for someone happiness</p>
                    <a href="https://forms.gle/yYn4RAYLiBetqqyn9" target="_blank" rel="noopener noreferrer">
                      <button className={classes['top-card-btn2']}>JOIN US</button>
                    </a>
                </div>
                             {/* CARD 3 */}
                <div className={classes['top-card1']}>
                    <div className={classes['top-img-div3']}>
                    <img className={classes['top-img1']} src={vector1} alt="" />
                    </div>
                    <p className={classes['top-card-title']}>Support</p>
                    <p className={classes['top-card-words']}>Be a reason for someone happiness</p>
                    <a href="https://forms.gle/YXCcR7zyoiLQpbbs8" target="_blank" rel="noopener noreferrer">
                      <button className={classes['top-card-btn3']}>REGISTER NOW</button>
                    </a>
                </div>
            </div>
        </div>

        <div className={classes['bottom']}>
            <div className={classes['bottom-left']}>
                <img className={classes['bottom-img']} src={vector3} alt="" />
            </div>
            <div className={classes['bottom-right']}>
                <p className={classes['bottom-about']}>About Us</p>
                <p className={classes['bottom-title']}>We empower people towards living their best lives</p>
                <p className={classes['bottom-words']}>
                   Blooming Wells Centre is about focusing on empowering individuals by providing necessary tools of support and helping them to take little steps towards acquiring necessary skills that will transform their lives. Our purpose is to inspire and engage people and provide ongoing support to overcome various life barriers that may have been preventing them from living a fulfilling life.
                </p>
                <button onClick={()=>navigate('/about')}
                className={classes['bottom-btn']}>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Section2