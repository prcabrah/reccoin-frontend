// import { useState } from 'react'
import Home from './pages/Home'
// import Header from './components/navigation/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import {WhitePaper} from "./pages/WhitePaper.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  return (
    <>
      {/* <Header/> */}
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
