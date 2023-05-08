import React from 'react'
import classes from './Section3.module.css'
import img1 from '../../Assets/vector4.png'
import img2 from '../../Assets/vector5.png'
import img3 from '../../Assets/vector6.png'
import img4 from '../../Assets/vector7.png'
import img5 from '../../Assets/vector8.png'
import { Link } from 'react-router-dom'
import hr from '../../Assets/hr.png'
import { IoAddCircleOutline } from 'react-icons/io5'

const Section3 = () => {
  return (
    <div className={classes['wrapper']}>

        <div className={classes['top']}>
            <div className={classes['top-title']}>
                <p className={classes['top-title1']}>Programs</p>
                <p className={classes['top-title2']}>
                Your participation can <br /> help transform many lives
                </p>
            </div>

            <div className={classes['top-content']}>
                              {/* CARD 1 */}
                <div className={classes['content-card']}>
                    <div className={classes['content-card-top']}>
                        <img className={classes['content-card-img']} src={img1} alt="" />
                        {/* <button className={classes['content-card-btn']}>DONATE NOW</button> */}
                    </div>
                    <div className={classes['content-card-bottom']}>
                        <p className={classes['content-card-bottom-title']}>Immigrant Settlement</p>
                        <p className={classes['content-card-bottom-content']}>
                        We help and support new immigrants by providing them with free counseling, support with job and housing searches, and any other resources they may need.
                        </p>
                        <Link to='/programs'
                        className={classes['content-card-bottom-link1']}>Read more</Link>
                        <img className={classes['hr']} src={hr} alt="" />
                    </div>
                </div>
                              {/* CARD 2 */}
                <div className={classes['content-card']}>
                    <div className={classes['content-card-top']}>
                        <img className={classes['content-card-img']} src={img2} alt="" />
                        {/* <button className={classes['content-card-btn']}>DONATE NOW</button> */}
                    </div>
                    <div className={classes['content-card-bottom']}>
                        <p className={classes['content-card-bottom-title']}>Educational workshops</p>
                        <p className={classes['content-card-bottom-content']}>
                           Providing Educational workshops sessions that will connect youths to different skills and pathways to learning.
                        </p>
                        <Link to='/programs' 
                        className={classes['content-card-bottom-link2']}>Read more</Link>
                        <img className={classes['hr']} src={hr} alt="" />
                    </div>
                </div>
                              {/* CARD 3 */}
                <div className={classes['content-card']}>
                    <div className={classes['content-card-top']}>
                        <img className={classes['content-card-img']} src={img3} alt="" />
                        {/* <button className={classes['content-card-btn']}>DONATE NOW</button> */}
                    </div>
                    <div className={classes['content-card-bottom']}>
                        <p className={classes['content-card-bottom-title']}>Supporting seniors</p>
                        <p className={classes['content-card-bottom-content']}>
                          through interactive groups to alleviate loneliness and isolation. Providing food, cultural sensitivity, and activities to promote their mental health
                        </p>
                        <Link to='/programs'
                         className={classes['content-card-bottom-link3']}>Read more</Link>
                        <img className={classes['hr']} src={hr} alt="" />
                    </div>
                </div>

            </div>
            

            <div className={classes['bottom-content']}>
                <img className={classes['bottom-content-img']} src={img4} alt="" />
                <div className={classes['bottom-content1']}>
                    <p className={classes['bottom-content-title']}>Our Statistics</p>
                    <p className={classes['bottom-content-words']}>We Provide Help</p>
                </div>

                <div className={classes['bottom-box-con']}>
                                 {/* BOX 1 */}
                    <div className={classes['bottom-box1']}>
                        <div className={classes['bottom-number-con']}>
                            <img className={classes['bottom-card']} src={img5} alt="" />
                          <p className={classes['bottom-number']}>356+</p>
                        </div>
                        <p className={classes['bottom-words']}>Featured Campaign</p>
                    </div>
                                 {/* BOX 2 */}
                    <div className={classes['bottom-box2']}>
                        <div className={classes['bottom-number-con']}>
                            <img className={classes['bottom-card']} src={img5} alt="" />
                          <p className={classes['bottom-number']}>172+</p>
                        </div>
                        <p className={classes['bottom-words2']}>Dedicated Volunteers</p>
                    </div>
                                 {/* BOX 3 */}
                    <div className={classes['bottom-box3']}>
                        <div className={classes['bottom-number-con']}>
                            <img className={classes['bottom-card']} src={img5} alt="" />
                          <p className={classes['bottom-number3']}>7623+</p>
                        </div>
                        <p className={classes['bottom-words2']}>Happy People</p>
                    </div>
                                 {/* BOX 4 */}
                    <div className={classes['bottom-box4']}>
                        <IoAddCircleOutline className={classes['bottom-add-icon']} />
                        <p className={classes['words4']}>Become a Volunteer</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Section3