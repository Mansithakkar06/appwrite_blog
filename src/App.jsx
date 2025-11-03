import { useEffect, useState } from 'react'
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
import AuthLayout from './components/AuthLayout'
import MyPosts from './pages/MyPosts'
import EditPost from './pages/EditPost'
import { useSelector } from 'react-redux'

function App() {
  const mode = useSelector(state => state.theme.mode)
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }, [mode]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/add-post' element=
              {<AuthLayout>
                <AddPost />
              </AuthLayout>} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='post/:id' element={<Post />} />
            <Route path='edit/:id' element={
              <AuthLayout>
                <EditPost />
              </AuthLayout>
            } />
            <Route path='my-posts' element={
              <AuthLayout>
                <MyPosts />
              </AuthLayout>
            } />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
