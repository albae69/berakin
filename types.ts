export interface User {
  id: string
  email: string
  name: string
  created_at: string
}

export interface PupHistory {
  id: number
  user_id: string
  created_at: string
  description: string
  latitude: string
  longitude: string
  users?: User
}

export interface Message {
  id: number
  created_at: string
  message: string
  user_id: string
  users?: User
}
