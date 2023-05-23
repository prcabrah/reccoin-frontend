
import Hero from '../components/homepage_components/HeroSection'
import { EarnReccoinReward } from '../components/homepage_components/earnReccoin';
import LatestNews from '../components/homepage_components/LatestNews.jsx';
import About from '../components/homepage_components/about';
import Faq from '../components/homepage_components/faq';
import howItWorks from '../components/homepage_components/howItWorks';
import Recycling from '../components/homepage_components/Recycling';
import Subscribe from '../components/homepage_components/Subscribe';

// import CompanyRegPage from './CompanyRegPage';



const Home = () => {
  return (
    <>
      <Hero /> 
      <EarnReccoinReward />
      <About />
      <Recycling/>
      <LatestNews />
      <Faq />
      <Subscribe />
      <howItWorks />
    </>
  );
};
export default Home;
