import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuItems: [],
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMenuItems } = menuSlice.actions

export default menuSlice.reducer