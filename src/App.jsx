import { useState } from 'react'
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Services/services';
import Wcu from './components/Whychooseus/wcu';
import About from './components/AboutUs/about';
import Contact from './components/ContactUs/contact';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return(
    <>
      <Header/>
      <Banner/>
      <Services/>
      <Wcu/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
