import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/services/Services'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/AppStore/AppStore'
import Footer from './Components/Footer/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Footer/>
    </>
  )
}

export default App
