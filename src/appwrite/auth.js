import { account } from "./config";
import { ID } from "appwrite";

export const createUser=async(email,password,name)=>{
    try {
        const user=await account.create(ID.unique(),email,password,name);
        return user;
    } catch (error) {
        console.log("error in signup",error)
    }
}
export const loginUser=async(email,password)=>{
    try {
        return await account.createEmailPasswordSession(email,password);    
    } catch (error) {
        console.log("error in login",error)
    }
}
export const getCurrentUser=async()=>{
    try {
        return await account.get()
    } catch (error) {
        console.log("error in fetching user",error)
    }
}

export const logoutUser=async(sessionId)=>{
    try {
        return await account.deleteSession(sessionId)
    } catch (error) {
        console.log("error in logout",error)
    }
}

export const getCurrentSession=async()=>{
    try {
        return await account.getSession("current")
    } catch (error) {
        console.log("error in current session",error)
    }
}