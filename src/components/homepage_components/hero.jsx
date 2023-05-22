
import MediumButton from '../buttons/mediumButton';
import heroImage from '../../assets/hero-bg.svg';

const Hero = () => {
  return (
    <>
      <div className="bg-herobg bg-contain md:bg-cover bg-right bg-no-repeat">
        <div className="flex items-center justify-start h-[15rem] md:h-[30rem] w-[90%] m-auto">
          <h2 className="text-[#0D4D00] text-center md:text-left font-black text-[60px] md:text-7xl/[6rem] md:w-[50%] xl:w-[30%] tracking-wide">
            Don’t Just Settle For a Wallet
          </h2>
          <div className="h-[80%] flex flex-row justify-between mt-36">
            <div className="w-[30%] ml-[3%] justiy-center border border-solid border-primary60">
              <h2 className="text-primary60 text-left flex-end justify-self-end justify-end items-end">
                RECYCLING
              </h2>
              <h2 className="text-primary60 text-left font-black text-[60px]">
                WASTE
              </h2>
              <p className="text-black text-left">
                Revolutionizing Waste Management with Rewards! Turn your Waste
                into Wealth and Make a Positive Impact on the Planet.
              </p>
              <MediumButton />
            </div>
            <div className="w-full h-full bg-herobg bg-no-repeat bg-contain bg-right">
              <img
                src={heroImage}
                alt="hero imag"
                className="w-full h-full object-contain -mt-32"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
