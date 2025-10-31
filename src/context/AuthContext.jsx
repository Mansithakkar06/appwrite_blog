import { createContext, use, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../appwrite/auth";

const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [session,setSession]=useState(null)
    const getUser=async()=>{
        try {
            const currentuser=await getCurrentUser()
            setUser(currentuser)
        } catch (error) {
            setUser(null)
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    
    return (
        <AuthContext.Provider value={{user,setUser,session,setSession}}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth=()=> useContext(AuthContext)
