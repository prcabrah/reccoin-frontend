import React from "react";

const Hero = () => {
  return (
    <>
    <div className="bg-herobg bg-contain md:bg-cover bg-right bg-no-repeat">
      <div className="flex items-center justify-start h-[15rem] md:h-[30rem] w-[90%] m-auto">
        <h2 className="text-[#0D4D00] text-center md:text-left font-black text-4xl md:text-7xl/[6rem] md:w-[50%] xl:w-[30%] tracking-wide">Don’t Just Settle For a Wallet</h2>
      </div>
      </div>
      <div className="flex flex-col items-center w-[90%] m-auto mt-2 md:mt-4 text-center">
        <h3 className="text-[#0D4D00] uppercase p-2 font-extrabold tracking-wider text-base md:text-xl">Introducing Reccoin as a service</h3>
        <h2 className="text-[#006D44] capitalize text-3xl md:text-5xl font-extralight mt-2">Recycle, Reuse, Reduce & Reward</h2>
        <p className="font-extrabold mt-4 text-[#0D4D00] text-sm md:text-base/8 md:w-[80%]">
          Forget about digital asset wallets that are difficult to implement,
          hard to scale, and ultimately built with yesterday's technology.
          Deliver maximum security to customers and investors while boosting
          operational speed and cost savings.
        </p>
      </div>
    
    </>
  );
};

export default Hero;
