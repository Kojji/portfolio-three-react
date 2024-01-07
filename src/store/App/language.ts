// using
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

// Define a type for the slice state
interface LanguageState {
  value: string
}

// Define the initial state using that type
const initialState: LanguageState = {
  value: 'en'
}

export const languageSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateLanguage: (state, data) => {
      state.value = data.payload
    }
  }
})

export const { updateLanguage } = languageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getLanguageState = (state: RootState) => state.language.value

export default languageSlice.reducer