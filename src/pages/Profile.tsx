import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Settings, Award, Coffee, Heart, Star, Edit3 } from 'lucide-react'
import { useTea } from '../context/TeaContext'

const Profile = () => {
  const { favorites, teas } = useTea()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Tea Enthusiast',
    email: 'tea.lover@example.com',
    bio: 'Passionate about discovering new flavors and brewing techniques.',
    favoriteCategory: 'Green Tea',
    brewingExperience: 'Intermediate'
  })

  const stats = [
    { icon: Heart, label: 'Favorites', value: favorites.length, color: 'text-red-500' },
    { icon: Coffee, label: 'Teas Tried', value: '24', color: 'text-tea-600' },
    { icon: Star, label: 'Reviews', value: '12', color: 'text-yellow-500' },
    { icon: Award, label: 'Badges', value: '5', color: 'text-purple-500' },
  ]

  const badges = [
    { name: 'Tea Explorer', description: 'Tried 20+ different teas', icon: '🗺️' },
    { name: 'Green Tea Master', description: 'Expert in green tea varieties', icon: '🍃' },
    { name: 'Brewing Guru', description: 'Perfect brewing techniques', icon: '⚡' },
    { name: 'Flavor Hunter', description: 'Discovered rare flavor profiles', icon: '🎯' },
    { name: 'Community Helper', description: 'Helped other tea lovers', icon: '🤝' },
  ]

  const recentActivity = [
    { action: 'Added Earl Grey to favorites', time: '2 hours ago' },
    { action: 'Reviewed Dragon Well Green Tea', time: '1 day ago' },
    { action: 'Completed brewing challenge', time: '3 days ago' },
    { action: 'Shared brewing tip', time: '1 week ago' },
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-tea-400 to-sage-400 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="text-3xl font-display font-bold border-b-2 border-tea-200 focus:border-tea-500 outline-none bg-transparent"
                  />
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full text-gray-600 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-tea-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                    {profile.name}
                  </h1>
                  <p className="text-gray-600 mb-4">{profile.bio}</p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-tea-100 text-tea-700 rounded-full text-sm">
                  {profile.favoriteCategory}
                </span>
                <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm">
                  {profile.brewingExperience}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Save' : 'Edit'}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats and Badges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Your Tea Journey</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Achievements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={badge.name}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-tea-50 to-sage-50 rounded-xl"
                  >
                    <div className="text-3xl">{badge.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-display font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tea-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 text-sm">{activity.action}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile