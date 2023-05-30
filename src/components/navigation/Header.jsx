import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import dropdown from '../../assets/dropdown.svg'
import Logo from '../logo'
import { TokenContext } from '../../context/reccoin'

const Header = () => {

    const {connectedAccount} = useContext(TokenContext)

const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    const linkValue = e.target.value
    setSelectedOption(linkValue);
  };

  return (
    <header className=" z-10 fixed bg-white top-0 h-20 w-full font-roboto font-bold text-base text-primary40 flex justify-around items-center border-blue-700 border-2, shadow-light ">
        {/* logo */}
        <div className='w-16 h-16'>
            <Logo fill="#0D4D00" w="64" h="64" />
        </div>

        {/* header links and connect button */}
        <div className='flex flex-row justify-between'>

            {/* header links */}
            <ul className='flex flex-row items-center'>
                <li className=' mr-4 hover:underline flex flex-row'>
                    <Link to="/">HOME</Link> <img src={dropdown} alt="dropdown icon" />
                </li>
                <li className='mr-4 hover:underline'>
                    <Link to="/prc">PRC</Link>
                </li>
                <li className='mr-4 hover:underline'>
                    <Link to="/white-paper"> WHITE PAPER</Link>
                </li>
                <li className='mr-4 hover:underline'>
                    <Link to="/contact-us">CONTACT US</Link>
                </li>
                <li className='mr-4 hover:underline'>
                    <Link to="/user-dashboard">DASHBOARD</Link>
                </li>
                {/* dropdown register menu */}
                {/* <li clas>
                    <select
                        id="dropdown"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className=" border-none outline-none"
                    >
                        <option>REGISTER</option>
                        <option value="/user-registration" className='p-2'>USER</option>
                        <option value="/company-registration" className='p-2'>COMPANY</option>

                    </select>
                </li> */}
            </ul>
            {/* connect button */}
            <button className='rounded text-white bg-primary40 p-2 ml-4'>
                {connectedAccount ? connectedAccount.slice(0,5) + "..." + connectedAccount.slice(connectedAccount.length-5, connectedAccount.length): " CONNECT WALLET"}
            </button>
        </div>
  
    </header>
  
    )
}

export default Header