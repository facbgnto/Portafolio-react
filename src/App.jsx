import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Nav from './components/Nav'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
  
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
      
  )
}

export default App