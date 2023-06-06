import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import dropdown from '../../assets/dropdown.svg'
import Logo from '../logo'
import { TokenContext } from '../../context/reccoin'
import menuIcon from '../../assets/menuGreen.svg'
import { HeaderData } from '../../data/HeaderData'

const Header = () => {

    const {connectedAccount, initializeContract, loading} = useContext(TokenContext)

    const [selectedOption, setSelectedOption] = useState('');
    const [toggle_menu, setToggleMenu] = useState(false);

    const handleOptionChange = (e) => {
        const linkValue = e.target.value
        setSelectedOption(linkValue);
    };

    const connectWallet = () => {
        initializeContract()
    }

    // toggle menu
    const toggleMenu =() => {
        setToggleMenu(!toggle_menu)
    }

  return (
    <header className=" z-10 fixed bg-white top-0 h-20 w-full font-roboto font-bold text-base text-primary40 flex flex-row justify-around items-center border-blue-700 border-2, shadow-light ">
        {/* logo */}
        <div className='w-16 h-16'>
            <Logo fill="#0D4D00" w="64" h="64" />
        </div>

        {/* header links */}
        {/* <div className='flex flex-row justify-between'> */}
            {/* header links */}
            <ul className={`md:flex md:flex-row items-center ${!toggle_menu ? 'hidden' : 'absolute right-0 top-0 flex-col w-[50%] bg-white p-4 mt-20 rounded-b-md transition-all duration-500 ease-in-out'}`}>
                <li className=' mr-4 hover:underline flex flex-row my-4 border-b border-primary40 md:border-none'>
                    <Link to="/">HOME</Link> <img src={dropdown} alt="dropdown icon" />
                </li>
                {
                HeaderData.map((item, index) => 
                    <li className='mr-4 hover:underline my-4 border-b border-primary40 md:border-none' key={index}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                )
               }
              
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
        {/* </div> */}

        {/* toggle menu and connect button  */}
            {/* connect button */}
            <button className='rounded text-white bg-primary40 p-2 ml-4' onClick={() => initializeContract()} >
                {loading ? "loading..." : connectedAccount ? connectedAccount.slice(0,5) + "..." + connectedAccount.slice(connectedAccount.length-5, connectedAccount.length): " CONNECT WALLET"}
            </button>

            {/* toggle  menu */}
            <button className='md:hidden ml-5' onClick={toggleMenu}>
            <img src={menuIcon} alt="menu-icon" />
            </button>
  
    </header>
  
    )
}

export default Header