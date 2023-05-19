import React from 'react'
import Hero from '../components/homepage_components/hero'
import LatestNews from "../components/homepage_components/LatestNews.jsx";

const Home = () => {
  return (
    <div className='max-w-[1028px] mx-auto'>
      <Hero />
      <LatestNews />
    </div>
  )
  
}

export default Home