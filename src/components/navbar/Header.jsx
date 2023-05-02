import React from 'react'
import classes from './Header.module.css'
import logo from '../../Assets/logo.png'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className={classes['wrapper']}>

        <div className={classes['left']}>
          <img onClick={()=>navigate('/')}
          className={classes['logo']} src={logo} alt="logo" />
        </div>

        <div className={classes['middle']}>

          <p onClick={()=> navigate('/')}
          className={classes['links']}>
            HOME
          </p>
          <p onClick={()=> navigate('/about')}
          className={classes['links']}>
            ABOUT US
          </p>
          <p 
          onClick={()=> navigate('/programs')}
          className={classes['links']}>
            PROGRAMS
          </p>
          <p onClick={()=> navigate('/events')}
          className={classes['links']}>
            EVENTS
          </p>

        </div>

        <div className={classes['right']}>
          <Link to={{ pathname: '/', search: '?sectionId=contacts' }}
          className={classes['right-btn']}>CONTACT US</Link>
        </div>

      </div>

      <div className={classes['canvas-con']}>
        <div className={classes['canvas-top-con']}>
          <img onClick={()=>navigate('/')}
          className={classes['canvas-top-logo']} src={logo} alt="logo" />
          <button className={classes['canvas-menu']}  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
             <AiOutlineMenuUnfold />
          </button>
        </div>
          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className={classes['canvas-slide']} >
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className={classes['canvas-lists']}>
               <Link to='/'
               className={classes['canvas-link']}>
                    HOME
               </Link>
               <Link to='/about'
               className={classes['canvas-link']}>
                    ABOUT  US
               </Link>
               <Link to='/programs'
               className={classes['canvas-link']}>
                     PROGRAMS
               </Link>
               <Link to='/events'
               className={classes['canvas-link']}>
                    EVENTS
               </Link>
               <Link to={{ pathname: '/', search: '?sectionId=contacts' }}
               className={classes['canvas-link-btn']}>
                     CONTACT US
                </Link>
            </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Header