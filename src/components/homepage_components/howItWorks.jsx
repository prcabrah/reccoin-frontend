import React from 'react'
import { howItworks } from '../../data/howItWorksData'

const HowItWorks = () => {
  return (
    <div className='bg-bg-color'>
      <h1 className='text-center text-[1.5rem] font-bold text-primary60 my-8 mt-8'>HOW IT WORKS</h1>
      {
        howItworks.map((item, index) => 
        <div className='flex flex-row w-[80%] mx-auto mb-10 text-white items-center  ' key={index}>
            <div className='w-36 rounded-[50%] h-36 bg-[#A9CE98] flex justify-center p-4 items-center absolute left-12'>
                <h1 className='text-[4rem] font-bold'>{index+1}</h1>
            </div>
            <div className='w-[97%] bg-primary40 rounded-[12px] pr-8 p-5'>
                <h1 className='text-center font-bold text-[1.2rem]'>{item.title}</h1>
                {item.desc.map((listItem, listIndex) => 
                <li className=' ml-20' key={listIndex}>{listItem}</li>

                )}
            </div>
        </div>

        

        )
      }
    </div>
  )
  }

export default HowItWorks
