import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Tea } from '../types/tea'
import { teaData } from '../data/teaData'

interface TeaContextType {
  teas: Tea[]
  favorites: string[]
  toggleFavorite: (teaId: string) => void
  isFavorite: (teaId: string) => boolean
}

const TeaContext = createContext<TeaContextType | undefined>(undefined)

export const useTea = () => {
  const context = useContext(TeaContext)
  if (!context) {
    throw new Error('useTea must be used within a TeaProvider')
  }
  return context
}

interface TeaProviderProps {
  children: ReactNode
}

export const TeaProvider: React.FC<TeaProviderProps> = ({ children }) => {
  const [teas] = useState<Tea[]>(teaData)
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (teaId: string) => {
    setFavorites(prev => 
      prev.includes(teaId)
        ? prev.filter(id => id !== teaId)
        : [...prev, teaId]
    )
  }

  const isFavorite = (teaId: string) => favorites.includes(teaId)

  return (
    <TeaContext.Provider value={{
      teas,
      favorites,
      toggleFavorite,
      isFavorite
    }}>
      {children}
    </TeaContext.Provider>
  )
}