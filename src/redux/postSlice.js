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
        }
    }
})
export const {addpost}=postSlice.actions
export default postSlice.reducer