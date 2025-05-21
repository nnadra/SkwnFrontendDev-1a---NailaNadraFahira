import React from 'react'

import About from './About'
import Brands from './Brands'
import Categories from './Categories'
import Product from './Product'
import LimitedDeals from './LimitedDeals'

import Image from '../assets/hero-img.svg'

const Home = () => {
  return (
    <div>
        <div className='flex h-screen items-center bg-white '>
      
      {/* Kiri */}
      <div className='flex-1 h-screen items-center bg-white p-30 '>
        <h1 className='text-7xl font-bold leading-tight text-[#2F241F] mb-6'>
        The kind of <br /> <span className='text-[#817253]'>furniture</span> you have <br /> been looking for
        </h1>


         <div className='flex gap-4'>
          {/* Search Catalog Button */}
          <button className='px-6 py-3 bg-[#E5F0B6] text-[#2F241F] text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2'>
            {/* Search Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            SEARCH CATALOG
          </button>

          {/* Watch Video Button */}
          <button className='px-6 py-3 border border-[#2F241F] text-[#2F241F] text-sm font-semibold rounded-lg flex items-center gap-2'>
            {/* Play Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            WATCH VIDEOS
          </button>
        </div>
      </div>

      {/* Kanan */}
      <div className="relative h-screen">
        <img src={Image} alt="Sofa"/>

        {/* Nama dan tombol*/}
        <div className="absolute inset-0 space-y-3">
          <h3 className='absolute top-4 left-4 bg-white/90 text-black text-sm px-3 py-1 rounded-md shadow'>$329</h3>
          <h1 className="text-3xl font-semibold">Pösht Sofa</h1>
          <button className="bg-[#2F241F] px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
            VIEW DETAILS <span className="text-base">›</span>
          </button>
        </div>
      </div>
      </div>
    <About/>
    <Brands/>
    <Categories/>
    <Product/>
    <LimitedDeals/>

    
    </div>
  )
}

export default Home
