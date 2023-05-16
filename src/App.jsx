import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/navigation/header'
import logo from './assets/logo.png'

function App() {

  return (

    <div className="h-20 w-full shadow-gray-900 flex justify-between items-center border-solid border-4 border-blue-700">

    <div className='w-20 h-20 '>
       <img src={logo} alt="logo" className="w-20 h-20" />
    </div>
    <div className='flex flex-row justify-between items-center'>
        <li>
            HOME
        </li>
        <li>
            PRC
        </li>
        <li>
            WHITE PAPER
        </li>
        <li>
            CONTACT US
        </li>
    </div>

    <div>
        <p>CONNECT WALLET</p>
    </div>
  
</div>

  )
}

export default App
