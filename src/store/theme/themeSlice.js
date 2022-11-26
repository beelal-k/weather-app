import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    useDarkTheme: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        changeTheme: (state,action) =>{
            state.useDarkTheme = action.payload;
        }
    }    
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;