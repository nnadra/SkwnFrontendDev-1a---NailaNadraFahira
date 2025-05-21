import React, { useState, useRef } from 'react'; // 🟢 Tambah useRef
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Product1 from '../assets/product1.svg';
import Product2 from '../assets/product2.svg';
import Product3 from '../assets/product3.svg';
import Product4 from '../assets/product4.svg';
import Product5 from '../assets/product5.svg';

const products = [
  { id: 1, name: 'Und Chair', price: '$329', image: Product1 },
  { id: 2, name: 'Cozy Sofa', price: '$499', image: Product2 },
  { id: 3, name: 'Orange Couch', price: '$379', image: Product3 },
  { id: 4, name: 'Modern Table', price: '$219', image: Product4 },
  { id: 5, name: 'Wooden Shelves', price: '$149', image: Product5 },
];

const Product = () => {
  const [zoomedId, setZoomedId] = useState(null);
  const scrollRef = useRef(null); // ✅ Tambahkan ref untuk scroll

  const handleClick = (id) => {
    setZoomedId(zoomedId === id ? null : id);
  };

  // ✅ Scroll function menggunakan ref
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-[#2F241F] h-screen px-10 py-20 relative'>
      {/* Header Section */}
      <div className='flex justify-between items-start mb-10'>
        <div>
          <p className='text-sm text-[#E5F0B6]'>OUR PRODUCTS</p>
          <h1 className='text-4xl text-[#E5F0B6] font-bold mt-2'>
            This month’s best seller
          </h1>
        </div>
        <button className='bg-[#E5F0B6] text-black font-medium py-2 px-5 rounded-lg'>
          SEE MORE
        </button>
      </div>

      {/* Product Cards */}
      <div
        ref={scrollRef} // ✅ Pasangkan ref di sini
        className='flex gap-7 overflow-x-auto py-10 scrollbar-hide relative z-10'
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
              zoomedId === product.id ? 'scale-[1.15] z-30' : 'scale-100'
            }`}
            onClick={() => handleClick(product.id)}
            style={{ minWidth: '300px', height: '390px', gap: '100px' }}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-500 ${
                zoomedId && zoomedId !== product.id ? 'brightness-70' : ''
              }`}
            />
            {zoomedId === product.id && (
              <div className='absolute inset-0 flex flex-col justify-between p-4 text-white'>
                <div className='self-start bg-white text-black text-sm px-3 py-1 rounded-md'>
                  {product.price}
                </div>
                <div className='text-xl font-semibold'>{product.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className='absolute bottom-10 right-10 flex gap-5 z-20'>
        <button onClick={scrollLeft} className='bg-[#E5F0B6] p-3 rounded-full'>
          <ChevronLeft className='text-black' />
        </button>
        <button onClick={scrollRight} className='bg-[#E5F0B6] p-3 rounded-full'>
          <ChevronRight className='text-black' />
        </button>
      </div>
    </div>
  );
};

export default Product;
