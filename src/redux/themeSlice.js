import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mode:"light",
};
const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            const theme=state.mode==="light"?"dark":"light"
            state.mode=theme
        }
    }
})
export const {toggleTheme}=themeSlice.actions
export default themeSlice.reducer