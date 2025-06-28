import React from 'react'
import { motion } from 'framer-motion'

interface TeaFiltersProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedOrigin: string
  setSelectedOrigin: (origin: string) => void
  priceRange: number[]
  setPriceRange: (range: number[]) => void
}

const TeaFilters: React.FC<TeaFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedOrigin,
  setSelectedOrigin,
  priceRange,
  setPriceRange,
}) => {
  const categories = [
    'all',
    'Green Tea',
    'Black Tea',
    'Oolong Tea',
    'White Tea',
    'Herbal Tea',
    'Pu-erh Tea'
  ]

  const origins = [
    'all',
    'China',
    'Japan',
    'India',
    'Sri Lanka',
    'Taiwan',
    'Nepal',
    'Kenya'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
    >
      <h3 className="text-xl font-display font-semibold text-gray-900">Filters</h3>
      
      {/* Category Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-tea-600 focus:ring-tea-500"
              />
              <span className="text-gray-700 capitalize">
                {category === 'all' ? 'All Categories' : category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Origin Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Origin</h4>
        <div className="space-y-2">
          {origins.map((origin) => (
            <label key={origin} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="origin"
                value={origin}
                checked={selectedOrigin === origin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="text-tea-600 focus:ring-tea-500"
              />
              <span className="text-gray-700 capitalize">
                {origin === 'all' ? 'All Origins' : origin}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setSelectedCategory('all')
          setSelectedOrigin('all')
          setPriceRange([0, 100])
        }}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Clear All Filters
      </button>
    </motion.div>
  )
}

export default TeaFilters