import React from 'react'
import Cta from './Cta'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <header>
  <div className="container header_container">
     <h5>Hello I'm</h5>
     <h1>Visanth Kallazhi</h1>
     <h5 className='text-light'>
     <Typewriter
  
     onInit={(typewriter)=> {

     typewriter
      
     .typeString("Full Stack Devoloper")
     
     .pauseFor(1000)
     .deleteAll()
     .typeString("React || Node || Express|| MongoDB")
     .pauseFor(1000)
     .deleteAll()
     .typeString("Python || Django || DS/ML Enthusiast")
     .start();
     }}
     />
     </h5>
     <Cta />
     <HeaderSocials/>
     <div className="me"> 
      <img src = {ME} alt='me'/>
     </div>
     <a href="#contact" className='scroll__down'> Scroll Down </a>
     </div>
     </header>
  )
}

export default Header