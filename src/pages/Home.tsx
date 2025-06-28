import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Coffee, Leaf, Clock } from 'lucide-react'
import TeaCard from '../components/TeaCard'
import { useTea } from '../context/TeaContext'

const Home = () => {
  const { teas } = useTea()
  const featuredTeas = teas.slice(0, 3)

  const stats = [
    { icon: Coffee, label: 'Tea Varieties', value: '500+' },
    { icon: Star, label: 'User Reviews', value: '10K+' },
    { icon: Leaf, label: 'Organic Options', value: '200+' },
    { icon: Clock, label: 'Brewing Guides', value: '100+' },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tea-100/50 to-sage-100/50" />
        
        {/* Floating tea leaves animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 text-tea-300"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                rotate: 0 
              }}
              animate={{ 
                y: -50,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            >
              <Leaf className="w-full h-full" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Discover Your
              <span className="block gradient-text">Perfect Tea</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the world's finest teas, learn brewing techniques, and find your ideal cup with our AI-powered recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/discover">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-tea-500 to-tea-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Start Exploring</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-sage-500 text-sage-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-50 transition-all duration-300"
              >
                Take Tea Quiz
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated tea cup */}
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <Coffee className="w-full h-full text-tea-400" />
            {/* Steam animation */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 left-1/2 w-1 h-8 bg-tea-300 rounded-full opacity-60"
                style={{ left: `${45 + i * 5}%` }}
                animate={{
                  opacity: [0.6, 0.3, 0],
                  y: [0, -20],
                  scale: [1, 1.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-tea-100 to-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-tea-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Teas */}
      <section className="py-20 bg-gradient-to-r from-sage-50 to-tea-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="gradient-text">Teas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selections from our tea masters, perfect for every palate and occasion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTeas.map((tea, index) => (
              <motion.div
                key={tea.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TeaCard tea={tea} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/discover">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-tea-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-tea-200"
              >
                View All Teas
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home