import React from 'react'
import Logo from '../assets/logo-dekoor.svg'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white px-20 py-24">
      <div className="grid grid-cols-6 gap-30">
        
        {/* Logo + Description */}
        <div className="col-span-2">
          <div className="mb-6">
            <img src={Logo} alt="Dekoor Logo" className="h-8" />
          </div>
          <p className="text-[#667085] text-sm leading-relaxed">
            Dekoor is a furniture company created to fulfill the needs of family 
            with aesthetic feeling in their furniture. Always pay attention to 
            details and give clear communication for the customers. Priority of 
            our design is comfortability.
          </p>
        </div>

        {/* Footer Links */}
        <div className="col-span-4 grid grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Care guide</li>
              <li>Redeem warranty</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Settings</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#101828] font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-[#667085]">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
      
  )
}

export default Footer
