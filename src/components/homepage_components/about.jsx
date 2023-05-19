import React from 'react'
import MediumButton from '../buttons/mediumButton'
import aboutUsImage from '../../assets/aboutUs.svg'

const About = () => {
  return <>
   
    <div className="bg-[#F2FAF7 w-full flex justify-center items-center flex-col md:flex-row gap-7 py-4 px-6">
        <div>
          <p className='text-center'>ABOUT US</p>
          <p className=' text-black font-base mt-6 className="mt-10 text-[#005232] text-[18px] font-semibold max-w-[640px]'>
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
        </div>
        <img src={aboutUsImage} alt="reccoin box" className="w-[450px] h-[700px]" />
        </div>
  </>
}

export default About