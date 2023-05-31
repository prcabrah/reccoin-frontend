import { useRef, useState } from 'react';
import Logo from '../logo';
import menuIcon from '../../assets/menu-ic.svg'
import { Link } from 'react-router-dom';
import { CompanyDashboardNavData} from '../../data/DashboardData';
import { DashboardFooterData } from '../../data/DashboardFooterData';
import searchIcon from '../../assets/search.svg'
import Deposit from './Deposit';
import HistoryPage from '../../pages/user_dashboard/HistoryPage';

import { routes } from '../../routes/dashboard/company'

const CompanyDashboardLayout = ({dashboard_content, active_link}) => {
 
  return (
    <div>
      {/* toggle menu button */}
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <img src={menuIcon} alt="" />
      </button>

      {/* left side bar */}
      <aside
        id='default-sidebar'
        className='fixed left-0 z-40 bg-[#0D4D00] items-center border-2 border-[#0D4D00] w-[20%] h-screen overflow-y-scroll transition-transform -translate-x-full sm:translate-x-0 mb-20'
        aria-label='Sidebar'
      >
        <div className='p-4 absolute left-12'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-24 h-24 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>

          <figcaption className='mt-1 text-white'>Welcome User</figcaption>
        </div>

        {/*  menu items*/}
        <div className='h-full px-3  absolute top-40 left-8  py-4 dark:bg-gray-800'>
         <ul className='space-y-2 text-white font-medium '>
             {
                 routes.map((route, index) =>
                     <Link to={route.path} key={index}
                           className={`w-full flex flex-row px-4 py-2 justify-left items-center bg-${route.name === active_link ? 'white' : ''} text-${route.name === active_link ? 'primary60' : 'white'}`}>
                         <img src={`${route.name === active_link ? route.green_icon : route.white_icon }`} alt={`${route.name} logo`} className='mr-4' />
                         <h4 className='text-2 font-montserrat'>{route.name}</h4>
                     </Link>
                 )
             }
         </ul>
        </div>

      </aside>

      {/* card component: header and content of dashboard */}
      <main className='absolute right-0 mb-20 w-[80%] overflow-hidden bg-[#F8F9FB]'>

        {/* dash board header */}
        <header className='p-4 border-black-700 flex flex-row justify-around items-center'>
          <div className='w-46 h-46 items-center '>
            <Logo fill='#0D4D00' w='56' h='56' />
          </div>
          <div>
            <h1 className='text-[1rem] md:text-[1rem] lg:text-[1.2rem] text-[#0D4D00] font-bold'>
              COMPANY DASHBOARD
            </h1>
          </div>
          {/* search box */}
          <div className='mt-4 flex flex-row border border-primary60 rounded-r-[20px] bg-white overflow-hidden '>
            <img src={searchIcon} alt="search-icon" className='border-r border-primary60 p-2'/>
            <input
              type='text'
              placeholder='Companies, Offers & Contest'
              className='p-2 w-100 italic text-primary60 focus:outline-none'
            />
          </div>
        </header>

          {/* dashboard content */}
        <div className=''>
            {dashboard_content ? dashboard_content : <Deposit/>}
        </div>

          {/* dashboard footer */}
      <footer className='w-[100%] px-4 py-2 bg-gray-200 text-black '>
        
        <div className=' flex flex-row item-center italic '>

          <div className='flex flex-col'>
            {/* enter to earn a reccoin */}
            <p className='text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] mt-1 w-[24rem] text-[#000000] mb-2'>
              Enter to Earn a Reccoin
            </p>
          {/* learn more button*/}
            <Link className='rounded-[26px] w-40 py-2 px-6 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-medium text-[#fff] bg-[#71B453]'>
              LEARN MORE
            </Link>

          </div>

          {/* other links */}
          <div className='flex flex-row justify-between items-center'>
            {
              DashboardFooterData.map((footeritem, footerindex) => 
              <Link key={footerindex} className='flex flex-col p-4 mr-4 justify-center items-center'>
                <img src={footeritem.icon} alt={`${footeritem.title} icon`} className='h-8 w-8' />
                <h4 className='font-bold text-primary60'>{footeritem.title}</h4>
              </Link>
              )
            }
           
          </div>
        </div>
      </footer>
      </main>

    </div>
  );
};

export default CompanyDashboardLayout;
