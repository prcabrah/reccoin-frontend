import React from "react";

const HistoryPage = () => {
  return (
    <div className="w-3/4 bg-white h-full flex border-2 border-blue-200">
      <div className="w-3/4 p-4">
        <h1 className="text-6xl font-bold text-green-600 py-4">History</h1>
        <div className="m-4">
          <div className="m-2">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-4xl">
              We have come a long way, from the era of handpicking and burning
              to this era of recycling to minimize the emission of carbon. We
              have developed numerous live applications currently in use and
              adopted globally. We aim to be evangelists in the blockchain
              industry, promoting the use of Web 3.0, which remains the safest
              place to earn cryptocurrencies.
            </p>
          </div>
          <div className="m-2">
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-4xl">
              We have come a long way, from the era of handpicking and burning
              to this era of recycling to minimize the emission of carbon. We
              have developed numerous live applications currently in use and
              adopted globally. We aim to be evangelists in the blockchain
              industry, promoting the use of Web 3.0, which remains the safest
              place to earn cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-green-600 flex flex-col justify-start">
        <button className="w-3/5 mx-auto py-2 bg-blue-300 text-white rounded-full mt-8 hover:bg-blue-400">
          Careers
        </button>
      </div>
    </div>
  );
};

export default HistoryPage;
