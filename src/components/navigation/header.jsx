import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="h-24 w-full shadow-gray-900 flex justify-between items-center">

        <div className='w-20 h-20'>
           <img src={logo} alt="logo" className="w-20 h-20"/>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <li>
                <Link to="">Home</Link>
            </li>
            <li>
                <Link to="">PRC</Link>
            </li>
            <li>
                <Link to="">WHITE PAPER</Link>
            </li>
            <li>
                <Link to="">CONTACT US</Link>
            </li>
        </div>

        <div>
            <p>CONNECT WALLET</p>
        </div>
      
    </div>
  
    )
}

export default Header