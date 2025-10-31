import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Post from './pages/Post'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/add-post' element={<AddPost/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='post/:id' element={<Post/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
