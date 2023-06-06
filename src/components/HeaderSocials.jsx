import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="www.linkedin.com/in/felipe-cruz-bonilla-1355b12b" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/facbgnto" target='_blank'><FaGithub/></a>
      
    </div>
  )
}

export default HeaderSocials
