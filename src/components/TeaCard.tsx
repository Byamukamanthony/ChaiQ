import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Star, Clock, Thermometer } from 'lucide-react'
import { useTea } from '../context/TeaContext'
import { Tea } from '../types/tea'

interface TeaCardProps {
  tea: Tea
  viewMode?: 'grid' | 'list'
}

const TeaCard: React.FC<TeaCardProps> = ({ tea, viewMode = 'grid' }) => {
  const { toggleFavorite, isFavorite } = useTea()

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="flex">
          <div className="w-48 h-32 flex-shrink-0">
            <img
              src={tea.image}
              alt={tea.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-1">
                  {tea.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-tea-100 text-tea-700 rounded-full text-xs">
                    {tea.category}
                  </span>
                  <span className="px-2 py-1 bg-sage-100 text-sage-700 rounded-full text-xs">
                    {tea.origin}
                  </span>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleFavorite(tea.id)
                }}
                className={`p-2 rounded-full transition-colors ${
                  isFavorite(tea.id)
                    ? 'text-red-500 bg-red-50'
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite(tea.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tea.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{tea.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Thermometer className="w-4 h-4" />
                  <span>{tea.brewingTemp}°F</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{tea.steepTime}m</span>
                </div>
              </div>
              <span className="text-xl font-bold text-tea-600">${tea.price}</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <Link to={`/tea/${tea.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="tea-card overflow-hidden group"
      >
        <div className="relative">
          <img
            src={tea.image}
            alt={tea.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              toggleFavorite(tea.id)
            }}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
              isFavorite(tea.id)
                ? 'bg-red-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite(tea.id) ? 'fill-current' : ''}`} />
          </button>
          
          <div className="absolute bottom-3 left-3 flex space-x-1">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-tea-700 rounded-full text-xs font-medium">
              {tea.category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-tea-600 transition-colors">
            {tea.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {tea.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(tea.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">({tea.rating})</span>
            </div>
            <span className="text-lg font-bold text-tea-600">${tea.price}</span>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Thermometer className="w-3 h-3" />
              <span>{tea.brewingTemp}°F</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{tea.steepTime} min</span>
            </div>
            <span className="text-sage-600 font-medium">{tea.origin}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default TeaCard