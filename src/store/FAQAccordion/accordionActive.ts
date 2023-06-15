import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface AccordionActive {
  value: number
}

const initialState: AccordionActive = {
  value: -1
}

export const accordionActiveSlice = createSlice({
  name: 'accordionActive',
  initialState,
  reducers: {
    closeAccordion: state => {
      state.value = -1
    },
    openAccordion: (state, data: PayloadAction<number>) => {
      state.value = data.payload
    }
  }
})

export const { closeAccordion, openAccordion } = accordionActiveSlice.actions

export const getAccordionActiveState = (state: RootState) => state.accordionActive.value

export default accordionActiveSlice.reducer