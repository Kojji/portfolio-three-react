// using
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

// Define a type for the slice state
interface WindowWidthState {
  value: number
}

// Define the initial state using that type
const initialState: WindowWidthState = {
  value: window.innerWidth
}

export const windowWidthSlice = createSlice({
  name: 'windowWidth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateWindowWidth: (state, data: PayloadAction<number>) => {
      state.value = data.payload
    }
  }
})

export const { updateWindowWidth } = windowWidthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getWindowWidthState = (state: RootState) => state.windowWidth.value

export default windowWidthSlice.reducer