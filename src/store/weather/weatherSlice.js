import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    useDarkTheme: false
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {}
})

// export const {changeTheme} = themeSlice.actions;
// export default themeSlice.reducer;