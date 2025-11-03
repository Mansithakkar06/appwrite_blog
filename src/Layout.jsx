import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-slate-100 dark:bg-gray-600 text-black dark:text-white min-h-screen duration-200'>
      <Navbar/>
      <div className='my-10 p-4'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
