import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

// Define a type for the slice state
interface NavBarState {
  value: boolean
}

// Define the initial state using that type
const initialState: NavBarState = {
  value: false
}

export const navBarSlice = createSlice({
  name: 'navBar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleNavBar: state => {
      state.value = !state.value
    }
  }
})

export const { toggleNavBar } = navBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getNavBarState = (state: RootState) => state.navBar.value

export default navBarSlice.reducer