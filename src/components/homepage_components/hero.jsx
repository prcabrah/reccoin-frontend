import React from 'react'
import MediumButton from '../buttons/mediumButton'
import heroImage from '../../assets/hero-bg.svg'

const Hero = () => {
  return (
    <>
      <div className="h-[80%] flex flex-row justify-between mt-36">
        <div className="w-[30%] ml-[3%] justiy-center border border-solid border-primary60">
          <h2 className="text-primary60 text-left flex-end justify-self-end justify-end items-end">RECYCLING</h2>
          <h2 className="text-primary60 text-left font-black text-[60px]">WASTE</h2>
          <p className='text-black text-left'>Revolutionizing Waste Management with Rewards!
            Turn your Waste into Wealth
            and Make a Positive Impact
            on the Planet.
          </p>
          <MediumButton/>
        </div>
        <div className='w-full h-full bg-herobg bg-no-repeat bg-contain bg-right'>
          <img src={heroImage} alt="hero imag" className='w-full h-full object-contain -mt-32'/>
        </div>
      </div>
    </>
  )
}

export default Hero