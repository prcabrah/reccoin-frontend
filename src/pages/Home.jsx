import React from 'react'
import Hero from '../components/homepage_components/hero'
import LatestNews from "../components/homepage_components/LatestNews.jsx";
import CompanyRegPage from './CompanyRegPage';


const Home = () => {
  return <>
    <Hero />
    <LatestNews />
    <CompanyRegPage />
  </>
}

export default Home