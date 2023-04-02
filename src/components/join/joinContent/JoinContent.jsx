import React from 'react'
import classes from './JoinContent.module.css'

const JoinContent = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['title-con']}>
            <p className={classes['title']}>
                Join Us In Changing Lives
            </p>
            <hr className={classes['title-hr']} />
        </div>

        <div className={classes['form-con']}>

            <form action="subimit" className={classes['form']}>

                <div className={classes['input-con']}>
                   <label className={classes['label-1']} htmlFor="name">Name</label>
                   <input className={classes['input-1']} type="name" />
                </div>

                <div className={classes['input-con']}>
                   <label className={classes['label-1']} htmlFor="name">Email</label>
                   <input className={classes['input-1']} type="name" />
                </div>

                <div className={classes['input-con']}>
                   <label className={classes['label-1']} htmlFor="name">Phone Number</label>
                   <input className={classes['input-1']} type="name" />
                </div>

                <div className={classes['input-con']}>
                   <label className={classes['label-1']} htmlFor="name">Tell us about you</label>
                   <textarea className={classes['textarea']} name="" id="" cols="30" rows="7"></textarea>
                </div>

                <div className={classes['form-btn']}>
                    <button className={classes['btn']}>JOIN NOW</button>
                </div>

            </form>
        </div>

    </div>
  )
}

export default JoinContent