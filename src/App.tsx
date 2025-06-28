import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Discover from './pages/Discover'
import TeaDetail from './pages/TeaDetail'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import { TeaProvider } from './context/TeaContext'

function App() {
  return (
    <TeaProvider>
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-tea-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/tea/:id" element={<TeaDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </motion.main>
      </div>
    </TeaProvider>
  )
}

export default App