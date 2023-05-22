import React from "react";
import  "./index.css";

const recycling = () => {
  return (
<div className="entire">

    <nav className="w-full h-20 flex items-center justify-between bg-white shadow-md">
        <img src="./images/reccoinlogo.png" alt="logo" />
        <div className=" h-65 bg-green-700 rounded-lg text-center">
           <h1 className="font-semibold text-2xl tracking-tighter text-white block mx-auto my-4 font-open-sans">Reccoin</h1>
        </div>
        <div className="border border-red w-217 h-53 bg-green-700 rounded-full p-2 mx-auto text-center">
           <h2 className=" w-184 h-29 font-roboto font-bold text-2xl leading-29 text-white mb-10">0x1111...234</h2>
        </div>
    </nav>

    <div className="p-0 md:px-16">
       <div className="h-510 w-900 mx-auto my-10">
          <div className="flex">
             <div className="box-border w-[436.78px] h-[251px] bg-[#006D44] border-2 border-[#006D44] rounded-[20px] mr-5 mb-5 p-4 p-10 px-30">
                <h2 className="w-229.88 h-29 font-roboto font-bold text-25 leading-29 text-white">How to Participate...</h2>
                <ul className="list-disc list-inside text-white font-sans font-normal font-semibold text-sm leading-6 tracking-tighter tracking-wider">
                  <li className="mb-2">Submit your collected plastics to any of our collection sites</li> 
                  <li className="mb-2">Sign-up on our platform by connecting to your wallet</li>
                  <li className="mb-2">Get rewarded instantly with RECCOINS worth the amount of plastics that was weighed.</li>
                </ul>
              </div>

             <div className="box-border w-[436.78px] h-[251px] bg-[#006D44] border-2 border-[#006D44] rounded-[20px] mb-5 p-4 p-10 px-30">
                <h2 className="w-229.88 h-29 font-roboto font-bold text-25 leading-29 text-white">Your Plastic Deposit Options...</h2>
                <p className="w-373.81 h-64 font-open-sans font-semibold text-12 leading-24 tracking-0.4 text-white">Get your collected plastics weighed at any of our collection centers in exchange for Reccoins to be transferred to your wallet instantly.</p>
                <button className="w-286.86 h-30 bg-white rounded-10 block mx-auto mt-n10 mb-30">MAKE DEPOSIT</button>
             </div>
      </div>
     
      <div className="flex">
      <div className="box-border w-[436.78px] h-[251px] bg-[#006D44] border-2 border-[#006D44] rounded-[20px] mr-10 p-[30px]">

            <h2 className="w-229.88 h-29 font-roboto font-bold text-25 leading-29 text-white">Our Incentives Program...</h2>
            <ul className="list-disc list-inside text-white font-sans font-normal font-semibold text-sm leading-6 tracking-tighter tracking-wider">
              <li className="mb-2">Invite a friend to get more incentives!</li>
              <li className="mb-2">Get more rewards by depositing over 20kg of Plastics.</li>
              <li className="mb-2">Get rewarded by depositing your collected plastics at any of our collection sites!</li> 
            </ul>
          </div>
          <div className="box-border w-[436.78px] h-[251px] p-[10px 30px 20px 30px] bg-[#006D44] border-2 border-[#006D44] rounded-[20px]">

            <h2 className="w-229.88 h-29 font-roboto font-bold text-25 leading-29 text-white">Our Partner Companies....</h2>
              <p>By teaming up with our trusted partners in the industry, we aim to enhance the scope and effectiveness of our platform, providing you with even more comprehensive recycling solutions. Together, we're working towards a shared goal of reducing plastic waste and preserving our environment for future generations.</p>
              <button>VIEW OUR PARTNERS</button>
          </div>
      </div>
      </div>
    <div className="box-border p-20 w-auto h-[182px] bg-white border-2 border-[#006D44] rounded-[20px] mt-60">
         <h3>Advertise your Plastic Recycling Company with us!</h3>
         <p className="font-sans font-normal text-base leading-4 tracking-[0.4px] text-black">
          Are you a plastic recycling company dedicated to making a positive impact on our environment? We invite you to join our mission by advertising your organization on our platform, a leading plastic collection website. By partnering with us, you can reach a wide audience of environmentally conscious individuals eager to contribute to the cause</p>
         <p className="font-sans font-normal text-base leading-4 tracking-[0.4px] text-black">Our platform does not only have an extensive outreach, but also allows you to target your advertisement to specific regions and demographics. We will help you stand out from the competition and improve your brand visibility. By aligning your brand with our reputable plastic collection website, you'll benefit from the trust and credibility we have built within the recycling community.</p>
         <p className="font-sans font-normal text-base leading-4 tracking-[0.4px] text-black"> We also fosters collaboration among recycling organizations, and help you'll actively contribute to the global mission of reducing plastic waste and protecting our environment. So, what are you waiting for...</p>
    </div>
    <footer className="w-312 h-20 font-sans font-normal text-base leading-5 tracking-[0.25px] text-gray-600 mt-30 mx-auto mb-10">
        <p>Copyright 2023 RECCOIN | All Rights Reserved</p>
    </footer>
</div>
</div>
      ) }
export default recycling