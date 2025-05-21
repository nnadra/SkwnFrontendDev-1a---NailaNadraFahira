import React from 'react'

import Brand1 from '../assets/company-logo1.svg'
import Brand2 from '../assets/company-logo2.svg'
import Brand3 from '../assets/company-logo3.svg'
import Brand4 from '../assets/company-logo4.svg'

const Brands = () => {
  return (
    <div className='w-full bg-[#FFFCFA] px-4 sm:px-8 md:px-16 lg:px-24 py-20'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5'>
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className='text-[#2F241F] font-bold text-7xl'>25+</h1>
          <h2 className='text-[#2F241F] font-medium text-lg mt-2'>PARTNERED BRANDS</h2>
        </div>

        {/* Right */}
        <div className='flex flex-wrap items-center justify-center gap-x-15 gap-y-6'>
          <img src={Brand1} alt="Gusto" className="h-12 object-contain" />
          <img src={Brand2} alt="Stripe" className="h-12 object-contain" />
          <img src={Brand3} alt="Treehouse" className="h-12 object-contain" />
          <img src={Brand4} alt="Upwork" className="h-12 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Brands
