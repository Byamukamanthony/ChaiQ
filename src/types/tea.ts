export interface Tea {
  id: string
  name: string
  category: string
  origin: string
  price: number
  rating: number
  description: string
  image: string
  flavorNotes: string[]
  brewingTemp: number
  steepTime: number
  caffeine: 'High' | 'Medium' | 'Low' | 'None'
  organic: boolean
}