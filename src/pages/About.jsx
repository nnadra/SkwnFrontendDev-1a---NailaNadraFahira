import React from 'react';

const About = () => {
  return (
    <div className="bg-[#2F241F] text-[#E5F0B6] min-h-[500px] flex items-center justify-center px-4 md:px-8 py-12">
      <div className="text-center w-full max-w-6xl">
        <p className="text-sm mb-8 text-left">WHY CHOOSE US?</p>

        <h1 className="text-left text-4xl md:text-6xl font-bold mb-10 leading-snug">
          We care about details and the quality <br className="hidden md:block" /> of our products
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-start md:justify-start items-start">
          {/* Card 1 */}
          <div className="flex items-center gap-4 w-full md:w-[280px]">
            <div className="bg-[#6E7353] text-white rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <div className="text-lg font-semibold leading-tight text-left">
              <p>MANUFACTURED WITH</p>
              <p>QUALITY MATERIALS</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 w-full md:w-[280px]">
            <div className="bg-[#6E7353] text-white rounded-md px-3 py-2 font-bold text-sm">
              5
            </div>
            <div className="text-lg font-semibold leading-tight text-left">
              <p>5 YEARS OF WARRANTY</p>
              <p>FOR EACH PRODUCT</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 w-full md:w-[280px]">
            <div className="bg-[#6E7353] text-white rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7V5a3 3 0 00-6 0v2M5 11h14M5 11v10a1 1 0 001 1h12a1 1 0 001-1V11H5z" />
              </svg>
            </div>
            <div className="text-lg font-semibold leading-tight text-left">
              <p>20 YEARS OF EXPERTISE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
