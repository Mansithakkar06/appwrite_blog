import React, { useEffect, useState } from 'react'
import logo from '../assets/Images/logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getCurrentSession, logoutUser } from '../appwrite/auth'

function Navbar() {
    const {user,setUser}=useAuth()
    const [session,setSession]=useState("")
    const navigate=useNavigate()
    const handleLogout=async(e)=>{
        e.preventDefault()
        await logoutUser(session)
        setSession("")
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        const getSession=async()=>{
        const session=await getCurrentSession()
        setSession(session.$id)
    }
    getSession()
    }, []);
    return (
        <header className='w-full p-3 mb-10 bg-white top-0 fixed shadow-lg shadow-black-500/50 text-black'>
            <nav className='flex justify-between mx-8'>
                <div>
                    <Link to="/"><img src={logo} alt="logo" width={50} /></Link>
                </div>
                <div>
                    <ul className='flex p-2'>
                        <li className='px-3 hover:text-purple-600'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                          <li className='px-3 hover:text-purple-600'>
                            <NavLink to="/add-post">Add Post</NavLink>
                        </li>
                        {!user ?
                        <>
                          <li className='px-3 hover:text-purple-600'>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                          <li className='px-3 hover:text-purple-600'>
                            <NavLink to="/signup">Signup</NavLink>
                        </li>
                        </>:
                        <>
                        <li className='px-3 hover:text-purple-600'>
                            Welcome {user.name}
                        </li>
                        <li className='px-3 hover:text-purple-600'>
                            <form onSubmit={handleLogout}>
                                <button>Logout</button>
                            </form>
                        </li>
                        </>
                        }   
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
