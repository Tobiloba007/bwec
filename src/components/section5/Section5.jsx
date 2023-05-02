import React from 'react'
import classes from './Section5.module.css'
import image from '../../Assets/vector10.png'
import { useNavigate } from 'react-router-dom'

const Section5 = () => {

  const navigate = useNavigate();

  return (
    <div className={classes['wrapper']}>

        <img className={classes['image']} src={image} alt="" />

        <div className={classes['content-con']}>
          <p className={classes['paragraph']}>We aim to provide a vibrant destiny for the underprivileged</p>
          <button onClick={()=>{navigate('/donate')}}
          className={classes['btn']}>DONATE NOW </button>
        </div>

    </div>
  )
}

export default Section5