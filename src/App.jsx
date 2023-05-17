import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/navigation/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/prc" element={''}/>
        <Route path="/whitepaper" element={''} />
        <Route path="/contactus" element={''} />
        <Route path="" />
        <Route path="" />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>

  )
}

export default App
