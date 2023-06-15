import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeatureMachineItem } from './home'
import type { RootState } from '../index'

// Define the initial state using that type
const initialState: FeatureMachineItem[] = [
  {
    machineId: "machineId_2",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1krzJEwq8rj_b1UUEgAE395kLqW_NT-FZ",
    title: "Machine 2 - Some anime Collection 2",
    price: 5,
    type: "supply",
    discount: 1
  },
  {
    machineId: "machineId_11",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1RW5LymsVL24uEFrJfWuOTaBzb0xl7tf0",
    title: "Machine 11 - Discount Collection",
    price: 5,
    type: "supply",
    discount: 1
  },
  {
    machineId: "machineId_13",
    bannerPhoto: "https://drive.google.com/uc?export=view&id=1TdLMkQuNmGNm_podBkHNAQbTeuC3mBIT",
    title: "Machine 13 - Discount Another Title",
    price: 7,
    type: "supply",
    discount: 2
  },
]

export const discountListSlice = createSlice({
  name: 'discountList',
  initialState,
  reducers: {
    refreshList: state => {
      // API call - refresh list
    }
  }
})

export const { refreshList } = discountListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getDiscountList = (state: RootState) => state.discountList

export default discountListSlice.reducer