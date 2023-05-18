// import React from 'react'
// import dropdown from '../../assets/dropdown.svg';
// import Logo from '../logo';
import Logo from './../components/logo';

const CompanyRegPage = () => {
  return (
    <div className='w-[34rem] md:w-[62rem] lg:w-[82rem] flex flex-row justify-center'>
      <div >
        <p className='text-[1rem] md:text-[2rem] lg:text-[3.7rem] font-bold text-center'>
          Company Registration Page
        </p>
        <div className='flex flex-row justify-center mt-4'>
          <div className='w-[10rem] md:w-[22rem] lg:w-[29rem] min-h-[34rem] bg-[#F8F9FB] border border-primary40-700'>
            <div className='flex flex-row mt-10 ml-10'>
              <div className='w-46 h-46 items-center '>
                <Logo fill='#0D4D00' w='46' h='46' />
              </div>
              <p className='text-[1rem] md:text-[1rem] lg:text-[1.2rem] mt-2 ml-3 text-[#0D4D00]  text-center'>
                Reccoin
              </p>
            </div>
          </div>
          <div className='w-[10rem] md:w-[16rem] lg:w-[21rem] min-h-[34rem] bg-[url(./assets/company-bg.svg)]  bg-contain md:bg-cover bg-right bg-no-repeat'></div>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegPage;
