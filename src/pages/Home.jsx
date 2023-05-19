import React from 'react'
import Hero from '../components/homepage_components/hero'
// import EarnReccoin from '../components/homepage_components/earnReccoin'
import {EarnReccoinReward} from '../components/homepage_components/earnReccoin'
import LatestNews from "../components/homepage_components/LatestNews.jsx";
import About from '../components/homepage_components/about';

const Home = () => {
  return <>
    <Hero />
    {/* <EarnReccoin /> */}
    <EarnReccoinReward />
    <About/>
    <LatestNews />
  </>
}

export default Home