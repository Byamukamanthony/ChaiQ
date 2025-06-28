import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Star, Clock, Thermometer, Coffee, Share2 } from 'lucide-react'
import { useTea } from '../context/TeaContext'
import BrewingGuide from '../components/BrewingGuide'
import ReviewSection from '../components/ReviewSection'

const TeaDetail = () => {
  const { id } = useParams()
  const { teas, toggleFavorite, isFavorite } = useTea()
  const [activeTab, setActiveTab] = useState('overview')
  
  const tea = teas.find(t => t.id === id)

  if (!tea) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tea not found</h2>
          <Link to="/discover" className="text-tea-600 hover:text-tea-700">
            Back to Discover
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'brewing', label: 'Brewing Guide' },
    { id: 'reviews', label: 'Reviews' },
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/discover"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-tea-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Discover</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={tea.image}
              alt={tea.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => toggleFavorite(tea.id)}
                className={`p-3 rounded-full backdrop-blur-md transition-all duration-200 ${
                  isFavorite(tea.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite(tea.id) ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-tea-100 text-tea-700 rounded-full text-sm font-medium">
                  {tea.category}
                </span>
                <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                  {tea.origin}
                </span>
              </div>
              
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {tea.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(tea.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">({tea.rating})</span>
                </div>
                <span className="text-2xl font-bold text-tea-600">${tea.price}</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {tea.description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-tea-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className="w-5 h-5 text-tea-600" />
                  <span className="font-medium text-gray-900">Temperature</span>
                </div>
                <span className="text-tea-700">{tea.brewingTemp}°F</span>
              </div>
              
              <div className="bg-sage-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-sage-600" />
                  <span className="font-medium text-gray-900">Steep Time</span>
                </div>
                <span className="text-sage-700">{tea.steepTime} min</span>
              </div>
            </div>

            {/* Flavor Profile */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Flavor Profile</h3>
              <div className="flex flex-wrap gap-2">
                {tea.flavorNotes.map((note, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-tea-500 to-tea-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Coffee className="w-5 h-5" />
              <span>Add to Cart</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-tea-500 text-tea-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <h3>About {tea.name}</h3>
                <p>
                  This exquisite {tea.category.toLowerCase()} tea from {tea.origin} offers a unique
                  tasting experience that captures the essence of its terroir. Carefully selected
                  and processed using traditional methods, this tea represents the pinnacle of
                  quality and craftsmanship.
                </p>
                
                <h4>Tasting Notes</h4>
                <p>
                  The flavor profile is characterized by {tea.flavorNotes.join(', ').toLowerCase()},
                  creating a harmonious balance that evolves with each sip. The aroma is inviting
                  and complex, preparing your palate for the rich experience to follow.
                </p>
                
                <h4>Origin Story</h4>
                <p>
                  Sourced directly from premium tea gardens in {tea.origin}, this tea is the
                  result of generations of expertise and dedication to the craft. The unique
                  climate and soil conditions of the region contribute to its distinctive
                  character and exceptional quality.
                </p>
              </motion.div>
            )}

            {activeTab === 'brewing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BrewingGuide tea={tea} />
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ReviewSection teaId={tea.id} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TeaDetail