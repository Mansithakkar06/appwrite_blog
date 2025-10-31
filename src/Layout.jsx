import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className='my-10 p-4'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
