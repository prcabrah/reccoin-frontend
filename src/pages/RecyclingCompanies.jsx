import React from 'react'
import { PRCData } from '../data/PRCdata'
import { Link } from 'react-router-dom'

const RecyclingCompanies = () => {

  return <>
    {/*   {/* card components */} 
    <div className='mt-32 max-w-[600px] flex flex-row flex-wrap justify-center mx-auto'>
        {
           PRCData.map((item, index) => 
            <div className='bg-primary40 p-4 w-64 text-white m-4 rounded-[12px]'>
                {/* card title  */}
                <h2 className='font-bold my-4'>{item.title}</h2>

                {/* if list: list item */}
                {
                    item.list.length > 1 ? 
                         item.list.map((listItem, listIndex) =>
                            <li key={listIndex} className='text-[0.8rem] my-2'>{listItem}</li>
                        )
                : " "
                }

                {/* if description: card description */}
                {
                    item.descr ? <p className='text-[0.8rem] mb-4'>{item.descr}</p> : ""
                }
                {/* if button: card button */}
                {
                    item.buttonText ? <Link to={`${item.linkto}`} className='flex mx-auto justify-center items-center w-full rounded-[28px] p-2 hover:tracking-wide ease-in-out duration-300 text-center bg-white text-primary40'>{item.buttonText}</Link> : ""
                }
            </div>
           )
        }
    </div>
  </>
  
}

export default RecyclingCompanies
