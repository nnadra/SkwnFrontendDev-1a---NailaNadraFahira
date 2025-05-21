import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
