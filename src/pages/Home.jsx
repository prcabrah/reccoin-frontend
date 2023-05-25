// import Hero from '../components/homepage_components/hero';
// import EarnReccoin from '../components/homepage_components/earnReccoin'
import { EarnReccoinReward } from '../components/homepage_components/earnReccoin';
import LatestNews from '../components/homepage_components/LatestNews.jsx';
import About from '../components/homepage_components/about';
import Faq from '../components/homepage_components/faq';

// import CompanyRegPage from './CompanyRegPage';

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <EarnReccoinReward />
      <About />
      <LatestNews />
      <Faq />
    </>
  );
};

export default Home;
