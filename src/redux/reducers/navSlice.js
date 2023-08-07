const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isOpen: false
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers:{
        openNav(state) {
            state.isOpen = true
        },
        closeNav(state) {
            state.isOpen = false
        }
    }
})

export const { openNav, closeNav } = navSlice.actions
export default navSlice.reducer