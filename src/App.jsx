import '@fontsource/anton/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/lobster/400.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/600.css'; // Por si necesitas semibold
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';

import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import CocinaPage from './Pages/CocinaPage'
import SalonPage from './Pages/SalonPage'
import IntroduccionPage from './Pages/IntroduccionPage'

const App = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-[var(--blanco-hueso)]">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/introduccion" element={<IntroduccionPage />} />
          <Route path="/cocina" element={<CocinaPage />} />
          <Route path="/salon" element={<SalonPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App