import React from 'react'
import { howItworks } from '../../data/howItWorksData'

const HowItWorks = () => {
  return (
    <div className='bg-bg-color p-8 flex flex-col justify-center items-center'>
      {/* section title */}
      <h1 className='text-center text-[1.5rem] font-bold text-primary60 my-8 mt-8'>HOW IT WORKS</h1>
      {
        howItworks.map((item, index) => 
        <div className='relative flex flex-row w-[80%] mx-auto mb-10 text-white justify-center items-center' key={index}>
            <div className=' w-32 h-32 rounded-[50%]  bg-[#A9CE98] flex justify-center p-4 items-center absolute left-0'>
                <h1 className='text-[3rem] font-bold'>{index+1}</h1>
            </div>
            <div className='w-[90%] h-28 bg-primary40 rounded-[12px] pl-8 p-2 '>
                <h1 className='text-center font-bold text-[1rem]'>{item.title}</h1>
                {item.desc.map((listItem, listIndex) => 
                <li className=' ml-20 text-[0.8rem]' key={listIndex}>{listItem}</li>

                )}
            </div>
        </div>
        )
      }
    </div>
  )
  }

export default HowItWorks
