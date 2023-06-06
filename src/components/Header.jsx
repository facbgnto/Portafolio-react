import React from 'react'
import '../assest/css/header.css'
import CV from '../assest/pdf/Curriculum_Felipe_Cruz_2023.pdf'
import ME from '../assest/img/me.png' 
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
              <h5> Hola soy </h5>
              <h1>Felipe Alejandro Cruz Bonilla </h1>
              <h5 className='text-light'>Fullstack JavaScript</h5>
              <div className='btncv'>
                  <a className='btn' href={CV} download> Descarega CV</a>
                  <a className='btn btn-primary' href="#contact"> Contactame</a>
              </div>
              <HeaderSocials/>
              <div className='me'>
                  <img src={ME} alt="yo" />
              </div>

              <a href="#contact" className='scroll_down'>Scroll Down</a>
             
        </div>
      </header>
    </div>
  )
}

export default Header
