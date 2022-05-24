import React, { useState } from "react";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "components/about/About";
import Header from "./components/header/Header";
import Navbar from "components/navbar/Navbar";
import Experience from "components/experience/Experience";
import Services from "components/services/Services";
import Portfolio from "components/portfolio/Portfolio";
import Testimonials from "components/testimonials/Testimonials";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";


export default function App() {
  
  
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />




    </>

  )
  }