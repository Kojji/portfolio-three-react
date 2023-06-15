import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeatureMachineItem } from './home'
import type { RootState } from '../index'

// Define the initial state using that type
const initialState: FeatureMachineItem[] = [
  {
    machineId: "machineId_1",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1QU3ZJUQPLz_AHpJiTS2HlFmu8gj38ENg",
    title: "Machine 1 - Something Collection",
    price: 5,
    type: "supply",
    discount: 0
  },
  {
    machineId: "machineId_2",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1krzJEwq8rj_b1UUEgAE395kLqW_NT-FZ",
    title: "Machine 2 - Some anime Collection 2",
    price: 5,
    type: "supply",
    discount: 1
  },
  {
    machineId: "machineId_3",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1ASf5Upt--HkfIzGd9H5x04rG1ZmUDIl5",
    title: "Machine 3 - Another Title",
    price: 7,
    type: "supply",
    discount: 0
  },
  {
    machineId: "machineId_21",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1n-7ofWSq3IISzOj0nemAPOdTk64iKzNO",
    title: "Machine 11 - Recent Collection",
    price: 5,
    type: "supply",
    discount: 0
  },
]

export const featuredListSlice = createSlice({
  name: 'featuredList',
  initialState,
  reducers: {
    refreshList: state => {
      // API call - refresh list
    }
  }
})

export const { refreshList } = featuredListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getFeaturedList = (state: RootState) => state.featuredList

export default featuredListSlice.reducer