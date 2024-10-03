import * as React from 'react'
import Home from '../components/Home/Home'

export default function MainLayout({children}) {
  return (
    <div className="bg-white z-0 lg:shadow-sm lg:rounded-lg p-5 lg:p-10 lg:border lg:border-gray-200  ">
      {children}
    </div>
  )
} 
