import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    {/* Layout itu bagian yang tetap */}
        <Navbar/>
    {/* oulet itu itu placeholder di React Router Dom 
    yang fungsinya buat tempat menampilkan komponen route anak. */}
        <main>
          <Outlet /> 
        </main>

        <Footer/>
    </div>
  )
}

export default Layout
