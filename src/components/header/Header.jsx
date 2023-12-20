import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me__resize.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header >
      
      <div id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rowin Mathias</h1>
        <div className="text-light">Fullstack Developer</div>
        <CTA />
        <HeaderSocials />
        

        <div className="me">
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' classname='scroll__down'>Scroll Down</a>
      </div>
      


    </header>
  )
}

export default Header