import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero /> 
        <About />
        <Service />
        <Project />
        <Contacts />
        <Footer />

      </div>
    </>
  )
}

export default App
