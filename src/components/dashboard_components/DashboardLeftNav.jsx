import React from 'react'
import userIcon from '../../assets/user-icon.svg'
import menIcon from '../../assets/menu-ic.svg'
import { DashboardLeftNavData } from '../../data/DashboardLeftNavData'
import { Link } from 'react-router-dom'

const DashboardLeftNav = () => {
   
  return (
    <div className='w-60 bg-primary60 text-white mt-24 p-6 pb-28'>

        {/* nav user profile pics */}
        <div className='w-24 h-24 rounded-[50%] flex flex-col justify-center items-center border border-solid border-white mx-auto'>
            <img src={userIcon} alt="user icon"  className='w-12 h-12 ' />
        </div>

        {/* nav welcome text */}
        <h4 className='text-white text-center'>{'Welcome user'}</h4>

        {/* menu title and icon */}
        <div className='flex flex-row my-4'>
            <img src={menIcon} alt="menu icon"  className='mr-4'/>
            <h2 className='font-bold'>Menu</h2>
        </div>

        {/* nav link */}
        <ul className='mx-auto'>
        {
            DashboardLeftNavData.map((item, index) =>
            <Link key={index} className='flex flex-row my-4 py-4 border-b justify-left items-center border-[#71b453]'>
                <img src={item.icon} alt="link logo" className='mr-4' />
                <h4 className='text-2 font-light font-montserrat'>{item.title}</h4>
            </Link>
            )
        }
        </ul>
    </div>
  )
}

export default DashboardLeftNav