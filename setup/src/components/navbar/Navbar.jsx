import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Navbar = () => {
  const [activeView, setActiveView] = useState('#')
  return (
    <nav>
    <a href="#" className={activeView === '#' ? 'active' : ''} onClick={()=>setActiveView('#')}><AiOutlineHome/></a>
    <a href="#about" className={activeView === '#about' ? 'active' : ''} onClick={()=>setActiveView('#about')}><AiOutlineUser/></a>
    <a href="#experience" className={activeView === '#experience' ? 'active' : ''} onClick={()=>setActiveView('#experience')}><BiBook/></a>
    <a href="#services" className={activeView === '#services' ? 'active' : ''} onClick={()=>setActiveView('#services')}><RiServiceLine/></a>
    <a href="#contact" className={activeView === '#contact' ? 'active' : ''} onClick={()=>setActiveView('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar