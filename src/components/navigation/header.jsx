import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import dropdown from '../../assets/dropdown.svg'

const Header = () => {
  return (
    <header className="h-20 w-full font-roboto font-bold text-base text-primary40 flex justify-around items-center border-blue-700 border-2, shadow-light ">
        {/* logo */}
        <div className='w-16 h-16'>
            <img src={logo} alt="logo" className="w-16 h-16" />
        </div>

        {/* header links and connect button */}
        <div className='flex flex-row justify-between'>

            {/* header links */}
            <ul className='flex flex-row items-center'>
                <li className=' mr-4 hover:underline flex flex-row'> <Link to="/">HOME</Link> <img src={dropdown} alt="dropdown icon" />  </li>
                <li className='mr-4 hover:underline'><Link to>PRC</Link></li>
                <li className='mr-4 hover:underline'><Link> WHITE PAPER</Link></li>
                <li className='mr-4 hover:underline'><Link>CONTACT US</Link></li>
            </ul>
            {/* connect button */}
            <button className='rounded text-white bg-primary40 p-2 ml-4'>CONNECT WALLET</button>
        </div>
  
    </header>
  
    )
}

export default Header