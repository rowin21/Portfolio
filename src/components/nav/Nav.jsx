import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { LuBookPlus } from "react-icons/lu"
import { MdOutlineMessage } from "react-icons/md"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LuBookPlus /></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>


    </nav>
  )
}

export default Nav