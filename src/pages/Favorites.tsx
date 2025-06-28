import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'
import TeaCard from '../components/TeaCard'
import { useTea } from '../context/TeaContext'

const Favorites = () => {
  const { teas, favorites } = useTea()
  const favoriteTeas = teas.filter(tea => favorites.includes(tea.id))

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Your <span className="gradient-text">Favorites</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Your curated collection of beloved teas
          </p>
        </motion.div>

        {favoriteTeas.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {favoriteTeas.map((tea, index) => (
              <motion.div
                key={tea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TeaCard tea={tea} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-tea-100 to-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-16 h-16 text-tea-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No favorites yet
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start exploring our tea collection and add your favorites by clicking the heart icon on any tea.
            </p>
            <Link to="/discover">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-tea-500 to-tea-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Discover Teas
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Favorites