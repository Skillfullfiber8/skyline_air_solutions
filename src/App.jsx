import { useState } from 'react'
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Services/services';
import './App.css'

function App() {
  return(
    <>
      <Header/>
      <Banner/>
      <Services/>
    </>
  )
}

export default App
