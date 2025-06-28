import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, User, ThumbsUp, MessageCircle } from 'lucide-react'

interface ReviewSectionProps {
  teaId: string
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ teaId }) => {
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    comment: ''
  })

  const reviews = [
    {
      id: '1',
      user: 'Sarah Chen',
      rating: 5,
      title: 'Absolutely delightful!',
      comment: 'This tea has become my daily go-to. The flavor is perfectly balanced and the aroma is incredible. Highly recommend for anyone looking to explore premium teas.',
      date: '2 days ago',
      helpful: 12
    },
    {
      id: '2',
      user: 'Michael Rodriguez',
      rating: 4,
      title: 'Great quality, worth the price',
      comment: 'Excellent tea with complex flavors. The brewing instructions were spot on. Only reason for 4 stars is the price point, but the quality justifies it.',
      date: '1 week ago',
      helpful: 8
    },
    {
      id: '3',
      user: 'Emma Thompson',
      rating: 5,
      title: 'Perfect for afternoon tea',
      comment: 'Love the smooth finish and the way it pairs with light snacks. The packaging was also beautiful - makes for a great gift.',
      date: '2 weeks ago',
      helpful: 15
    }
  ]

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle review submission
    console.log('Submitting review:', newReview)
    setNewReview({ rating: 5, title: '', comment: '' })
  }

  return (
    <div className="space-y-8">
      {/* Review Summary */}
      <div className="bg-gradient-to-r from-tea-50 to-sage-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-display font-bold text-gray-900">
            Customer Reviews
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.7</span>
            <span className="text-gray-600">({reviews.length} reviews)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{rating}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : 5}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-xl p-6"
      >
        <h4 className="text-xl font-semibold text-gray-900 mb-4">Write a Review</h4>
        
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      rating <= newReview.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Review Title
            </label>
            <input
              type="text"
              value={newReview.title}
              onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tea-500 focus:border-transparent"
              placeholder="Summarize your experience"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tea-500 focus:border-transparent"
              placeholder="Share your thoughts about this tea..."
            />
          </div>
          
          <button
            type="submit"
            className="bg-gradient-to-r from-tea-500 to-tea-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Submit Review
          </button>
        </form>
      </motion.div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-tea-400 to-sage-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">{review.user}</h5>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h6 className="font-semibold text-gray-900 mb-2">{review.title}</h6>
            <p className="text-gray-700 mb-4">{review.comment}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="flex items-center space-x-1 hover:text-tea-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-tea-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Reply</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection