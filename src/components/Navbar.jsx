import React from 'react'
import logo from '../assets/Images/logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from '../appwrite/auth'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { toggleTheme } from '../redux/themeSlice'

function Navbar() {
    const user=useSelector(state=>state.auth.user)
    const session=useSelector(state=>state.auth.session)
    const status=useSelector(state=>state.auth.status)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const mode=useSelector(state=>state.theme.mode)

    const handleLogout=async(e)=>{
        e.preventDefault()
        await logoutUser(session)
        dispatch(logout())
        navigate('/')
    }
    const handleToggle=()=>{
        dispatch(toggleTheme())
    }

    return (
        <header className='w-full p-3 mb-10 bg-slate-200 dark:bg-gray-800 text-black dark:text-white top-0 fixed shadow-sm shadow-black-500/50'>
            <nav className='flex justify-between mx-8'>
                <div>
                    <Link to="/"><img src={logo} alt="logo" width={50} /></Link>
                </div>
                <div>
                    <ul className='flex py-2'>
                        <li className='px-3 hover:text-purple-600'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                          <li className='px-3 hover:text-purple-600'>
                            <NavLink to="/add-post">Add Post</NavLink>
                        </li>
                        {!status ?
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
                            <NavLink to="/my-posts">My Posts</NavLink>
                        </li>
                        <li className='px-3 hover:text-purple-600'>
                            <form onSubmit={handleLogout}>
                                <button>Logout</button>
                            </form>
                        </li>
                        <li className='ps-3'>
                            Welcome {user?.name}
                        </li>
                        </>
                        }   
                        <li className='ps-4'>
                            <button className='hover:cursor-pointer text-lg' onClick={handleToggle}><FontAwesomeIcon icon={mode==="light"?faSun:faMoon}/></button>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar
