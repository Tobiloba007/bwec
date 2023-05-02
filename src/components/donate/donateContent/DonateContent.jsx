import React from 'react'
import classes from './DonateContent.module.css'

const DonateContent = () => {
  return (
    <div className={classes['wrapper']}>
        <div className={classes['title-con']}>
            <p className={classes['title']}>
                Every Little Effort Counts
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
                   <label className={classes['label-1']} htmlFor="name">Pay with Paypal</label>
                   <input className={classes['input-1']} type="name" />
                </div>

                <div className={classes['input-con']}>
                   <label className={classes['label-1']} htmlFor="name">Tell us about you</label>
                   <textarea className={classes['textarea']} name="" id="" cols="30" rows="7"></textarea>
                </div>

                <div className={classes['form-btn']}>
                    <button className={classes['btn']}>DONATE NOW </button>
                </div>

            </form>
        </div>

    </div>
  )
}

export default DonateContent