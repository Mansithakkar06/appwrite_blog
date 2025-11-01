import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:null,
    session:null,
    status:false
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.session=action.payload.$id;
            state.status=true;
        },
        logout:(state)=>{
            state.status=false;
            state.user=null;
            state.session=null;
        },
        currentUser:(state,action)=>{
            state.user=action.payload
        }


    }
})
export const {login,logout,currentUser} = authSlice.actions;
export default authSlice.reducer;