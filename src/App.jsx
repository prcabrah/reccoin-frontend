import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/navigation/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import {WhitePaper} from "./pages/WhitePaper.jsx";
import Contact from "./pages/Contact.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Hero from './components/homepage_components/Hero'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/prc" element={''}/>
        <Route path="/white-paper" element={<WhitePaper />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="" />
        <Route path="" />
      </Routes>
      <Footer/>
    </>

  )
}

export default App
