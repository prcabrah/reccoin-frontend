import React from 'react'
import MediumButton from '../buttons/mediumButton'
import aboutUsImage from '../../assets/aboutUs.svg'

const About = () => {
  return <>
    <div className='bg-[#F2FAF7] px-8 pt-8 flex flex-row justify-center h-screen'>
      <div className='border-2 border-red'>
        <h2 className='text-center font-lg mt-6 font-openSans font-bold text-primary60'>ABOUT US</h2>
        <p className=' text-black font-base mt-6'>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis 
          nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor 
          sit amet, consectetuer adipiscing elit, sed diam nonummy 
          nibh euismod tincidunt ut laoreet dolore magna aliquam 
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
          exerci tation ullamcorper suscipit lobortis nisl ut 
          aliquip ex ea commodo 
        </p>

        {/* learn more button */}
        <MediumButton/>
      </div>
      
      {/* image */}
        <img src={aboutUsImage} alt="about us img" className=' h-full w-[450px] ' />
    </div>
  </>
}

export default About