import React from 'react'
import {FaLinkedin} from 'react-icons/fa6'
import { FaGithub } from "react-icons/fa"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="-blank"><FaLinkedin /></a>
        <a href="https://github.com" target="-blank"><FaGithub /></a>
       

    </div>
  )
}

export default HeaderSocials