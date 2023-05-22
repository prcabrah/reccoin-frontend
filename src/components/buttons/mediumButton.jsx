import React from 'react'
import { Link } from 'react-router-dom'

const MediumButton = ({text, linkto}) => {
  return (
    <Link to={`${linkto}`} className='w-32 bg-primary40 p-4 text-white rounded-[8px] hover:tracking-wide'>{text}</Link>
  )
}

export default MediumButton
