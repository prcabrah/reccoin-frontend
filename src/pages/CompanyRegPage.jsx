// import React from 'react'
// import dropdown from '../../assets/dropdown.svg';
// import Logo from '../logo';
import Logo from './../components/logo';

const CompanyRegPage = () => {
  return (
    <div className='w-[34rem] md:w-[62rem] lg:w-[82rem] flex flex-row justify-center'>
      <div className='w-[32rem] md:w-[60rem] lg:w-[70rem] min-h-[64rem] border border-primary40-600'>
        <p className='text-[1rem] md:text-[2rem] lg:text-[4.7rem] font-bold text-center'>
          Company Registration Page
        </p>
        <div className='flex flex-row justify-center mt-6'>
          <div className='w-[10rem] md:w-[22rem] lg:w-[33rem] min-h-[50rem] bg-blue-50 border border-primary40-700'>
            <div className='flex flex-row'>
              <div className='w-46 h-46 items-center'>
                <Logo fill='#0D4D00' w='46' h='46' />
              </div>
              <p className='text-[1rem] md:text-[1rem] lg:text-[1rem] mt-3 font-bold text-center'>
                Recoin
              </p>
            </div>
          </div>
          <div className='w-[10rem] md:w-[22rem] lg:w-[31rem] min-h-[50rem] bg-[url(./assets/company-bg.svg)] bg-contain md:bg-cover bg-right bg-no-repeat'></div>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegPage;
