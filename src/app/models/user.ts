import { Photo } from "./Photo"

export interface userInfo {
  id: string
  userName: string
  token: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface registerDto {
  firstName: string
  secondName: string
  email: string
  password: string
}


export interface UserMember {
  id:string;
  firstName: string
  secondName: string
  photoUrl: any
  created: Date
  lastActive: Date
  age: number
  gender: string
  interests: string
  city: string
  country: string
  photos: Photo[]
}

