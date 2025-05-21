import React from 'react'
import { Mail } from 'lucide-react' // Import icon dari lucide-react

const LimitedDeals = () => {
  return (
    <div className='p-24 min-h-[500px] bg-[#FCFAFA] items-center justify-center'>

      <div className='mb-20'>
        <p className='text-lg text-[#2F241F] mb-10'>LIMITED DEALS</p>
        <h1 className='text-6xl text-[#2F241F] font-bold mt-2'>
          Become a member and get 10% off of <br /> your first purchase
        </h1>
      </div>

      <div className="flex items-center w-[400px] rounded-[12px] overflow-hidden bg-white shadow-sm">
        <input 
          type="text" 
          placeholder="Enter your email here"
          className="flex-1 px-4 py-3 text-[16px] text-[#4A362D] placeholder-[#4A362D] bg-white outline-none"
        />
        <div className="bg-[#EAF0BC] px-4 py-3 flex items-center justify-center">
          {/* Lucide email icon */}
          <Mail size={20} color="#2F2A1E" />
        </div>
      </div>

    </div>
  )
}

export default LimitedDeals
