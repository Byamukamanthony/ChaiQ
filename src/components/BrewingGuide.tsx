import React from 'react'
import { motion } from 'framer-motion'
import { Thermometer, Clock, Coffee, Droplets } from 'lucide-react'
import { Tea } from '../types/tea'

interface BrewingGuideProps {
  tea: Tea
}

const BrewingGuide: React.FC<BrewingGuideProps> = ({ tea }) => {
  const steps = [
    {
      icon: Droplets,
      title: 'Measure Tea',
      description: `Use 1 teaspoon (2-3g) of ${tea.name} per cup of water.`,
    },
    {
      icon: Thermometer,
      title: 'Heat Water',
      description: `Heat water to ${tea.brewingTemp}°F. Different teas require different temperatures for optimal extraction.`,
    },
    {
      icon: Coffee,
      title: 'Steep Tea',
      description: `Steep for ${tea.steepTime} minutes. Longer steeping may result in bitterness.`,
    },
    {
      icon: Coffee,
      title: 'Enjoy',
      description: 'Remove tea leaves and enjoy your perfectly brewed cup. Can be re-steeped 2-3 times.',
    },
  ]

  const tips = [
    'Use filtered water for the best taste',
    'Preheat your teapot or cup with hot water',
    'Store tea in a cool, dry place away from light',
    'Experiment with steeping times to find your preference',
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
          How to Brew {tea.name}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-tea-50 to-sage-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-tea-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-display font-semibold text-gray-900 mb-4">
          Pro Tips
        </h4>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-tea-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-tea-500 to-sage-500 text-white rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-3">Perfect Brewing Parameters</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Thermometer className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{tea.brewingTemp}°F</div>
            <div className="text-sm opacity-90">Temperature</div>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{tea.steepTime}m</div>
            <div className="text-sm opacity-90">Steep Time</div>
          </div>
          <div className="text-center">
            <Coffee className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">2-3g</div>
            <div className="text-sm opacity-90">Tea Amount</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrewingGuide