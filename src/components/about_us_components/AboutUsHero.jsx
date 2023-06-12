const AboutUsHero = () => {
  return (
    <div className="bg-[url('/src/assets/bag.png')] bg-no-repeat bg-center w-full py-20 md:py-32 lg:py-[254px] relative flex flex-col items-center z-[0] px-5">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#090808]/70 z-[1]"></div>
      <p className="text-white font-montserrat text-[18px] md:text-[30px] lg:text-[40px] font-semibold z-[2]">ABOUT RECCOIN</p>
      <div className="h-1 w-[151px] bg-white mt-[13px] mb-8 lg:mb-[60px] z-[2]"></div>
      <p className="text-white font-montserrat text-[28px] md:text-[44px] lg:text-[64px] font-bold z-[2] max-w-[1122px] mb-[21px] text-center">We Safeguard The Environment</p>
      <p className="text-white font-montserrat text-[16px] md:text-[26px] lg:text-[36px] font-bold z-[2] max-w-[1219px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel.</p>
    </div>
  );
};

export default AboutUsHero;
