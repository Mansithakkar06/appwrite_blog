import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AuthLayout({children}) {
    const status=useSelector(state=>state.auth.status)
    if(!status)
    {
        return <Navigate to='/login' replace/>
    }
    return children
 
}

export default AuthLayout
