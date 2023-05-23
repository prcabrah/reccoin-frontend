import Hero from '../components/homepage_components/HeroSection'
import { EarnReccoinReward } from '../components/homepage_components/earnReccoin';
import LatestNews from '../components/homepage_components/LatestNews.jsx';
import About from '../components/homepage_components/about';
import Faq from '../components/homepage_components/faq';
import Recycling from '../components/homepage_components/Recycling';
import HowItWorks from '../components/homepage_components/howItWorks';

// import CompanyRegPage from './CompanyRegPage';



const Home = () => {
  return (
    <>
      <Hero /> 
      <EarnReccoinReward />
      <About />
      <Recycling/>
      <HowItWorks/>
      <LatestNews />
      <Faq />
    </>
  );
};
export default Home;
