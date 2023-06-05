// import React from 'react';

import AboutUsHero from "../components/about_us_components/AboutUsHero";
import Empowering from "../components/about_us_components/Empowering";
import JoinUs from "../components/about_us_components/JoinUs";
import Values from "../components/about_us_components/Values";
import Vision from "../components/about_us_components/Vision";
import Footer from "../components/footer";
import HomeFooter from "../components/homepage_components/HomeFooter";

const AboutUs = () => {
  return(
    <>
      <AboutUsHero/>
      <Values/>
      <Vision/>
      <Empowering/>
      <JoinUs/>
      <HomeFooter/>
      <Footer/>
    </>
  )
   
    
     };

export default AboutUs;

