import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeatureMachineItem } from './home'
import type { RootState } from '../index'

// Define the initial state using that type
const initialState: FeatureMachineItem[] = [
  {
    machineId: "machineId_21",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1n-7ofWSq3IISzOj0nemAPOdTk64iKzNO",
    title: "Machine 11 - Recent Collection",
    price: 5,
    type: "supply",
    discount: 0
  },
  {
    machineId: "machineId_22",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=14xoNHJ83Ds4Wz-GdahLbBsCiAKorT_-m",
    title: "Machine 12 - Some recent anime Collection 2",
    price: 5,
    type: "supply",
    discount: 0
  },
  {
    machineId: "machineId_23",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1BHmAFKL1go1B0xLJustlC9yBVG_v5KTy",
    title: "Machine 13 -Recent Another Title",
    price: 7,
    type: "supply",
    discount: 0
  },
]

export const recentListSlice = createSlice({
  name: 'recentList',
  initialState,
  reducers: {
    refreshList: state => {
      // API call - refresh list
    }
  }
})

export const { refreshList } = recentListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getRecentList = (state: RootState) => state.recentList

export default recentListSlice.reducer