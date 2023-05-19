import React from 'react'
import Hero from '../components/homepage_components/HeroSection'
import EarnReccoin from '../components/homepage_components/earnReccoin'
import {EarnReccoinReward} from '../components/homepage_components/earnReccoin'
import LatestNews from "../components/homepage_components/LatestNews.jsx";

const Home = () => {
  return <>
    <Hero />
    <EarnReccoin />
    {/* <EarnReccoinReward /> */}
    <LatestNews />
  </>
}

export default Home