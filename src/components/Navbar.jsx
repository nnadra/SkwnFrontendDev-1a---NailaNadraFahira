import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiShoppingBag } from 'react-icons/fi'
import Logo from '../assets/logo-dekoor.svg'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="w-full px-10 h-20 flex items-center justify-between bg-white shadow-sm relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Dekoor Logo" className="h-6" />
      </div>

      {/* Menu */}
      <div className="flex space-x-8 text-sm font-medium text-black">
        <Link to="#">About us</Link>

        {/* Furniture Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Furniture</span>
            <FiChevronDown className="text-xs" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-md rounded-lg py-2 w-40 z-10">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                Chairs
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                Tables
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
                Sofas
              </Link>
            </div>
          )}
        </div>

        <Link to="#">Partnerships</Link>
        <Link to="#">Contact</Link>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 rounded-lg bg-[#E5F0B6] text-sm font-medium">
          Sign Up
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#3C2A1E]">
          <FiShoppingBag className="text-white text-lg" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
