import { createSlice } from "@reduxjs/toolkit"

const initialState={
    posts:[]
}
const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        addpost:(state,action)=>{
            state.posts.push(action.payload)
        },
        updatepost:(state,action)=>{
            const findpost=state.posts.findIndex((post)=>post.$id===action.payload.$id)
            state.posts[findpost]=action.payload
        },
        deletepost:(state,action)=>{
            const post=state.posts.filter((post)=>post.$id!==action.payload)
            state.posts=post
        }

    }
})
export const {addpost,updatepost,deletepost}=postSlice.actions
export default postSlice.reducer