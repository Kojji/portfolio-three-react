import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { GachaMachine } from './machine'

const initialState: {value: GachaMachine, loading: boolean} = {
  value: {
    machineId: "",
    bannerPhoto: [],
    title: "",
    description: "",
    price: 0,
    type: "",
    discount: 0
  },
  loading: false
}

export const fetchMachineInfo = createAsyncThunk<GachaMachine, string>(
  "machineInfo/fetch", 
  async (machineId) => {
    // fix - integrate to api
    let fakeMachineList : GachaMachine[] = [
      {
        machineId: "machineId_1",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1QU3ZJUQPLz_AHpJiTS2HlFmu8gj38ENg"],
        title: "Machine 1 - Something Collection",
        price: 5,
        description: "Short Description",
        type: "supply",
        discount: 0
      },
      {
        machineId: "machineId_2",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1krzJEwq8rj_b1UUEgAE395kLqW_NT-FZ"],
        title: "Machine 2 - Some anime Collection 2",
        price: 5,
        description: "Another Desc",
        type: "supply",
        discount: 1
      },
      {
        machineId: "machineId_3",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1ASf5Upt--HkfIzGd9H5x04rG1ZmUDIl5"],
        title: "Machine 3 - Another Title",
        description: "example desc",
        price: 7,
        type: "supply",
        discount: 0
      },
      {
        machineId: "machineId_11",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1RW5LymsVL24uEFrJfWuOTaBzb0xl7tf0"],
        title: "Machine 11 - Discount Collection",
        description: "example desc",
        price: 5,
        type: "supply",
        discount: 1
      },
      {
        machineId: "machineId_13",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1TdLMkQuNmGNm_podBkHNAQbTeuC3mBIT"],
        title: "Machine 13 - Discount Another Title",
        price: 7,
        description: "example desc",
        type: "supply",
        discount: 2
      },
      {
        machineId: "machineId_21",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1n-7ofWSq3IISzOj0nemAPOdTk64iKzNO"],
        title: "Machine 11 - Recent Collection",
        description: "example desc",
        price: 5,
        type: "supply",
        discount: 0
      },
      {
        machineId: "machineId_22",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=14xoNHJ83Ds4Wz-GdahLbBsCiAKorT_-m"],
        title: "Machine 12 - Some recent anime Collection 2",
        price: 5,
        description: "example desc",
        type: "supply",
        discount: 0
      },
      {
        machineId: "machineId_23",
        bannerPhoto: ["https://drive.google.com/uc?export=view&id=1BHmAFKL1go1B0xLJustlC9yBVG_v5KTy"],
        title: "Machine 13 -Recent Another Title",
        price: 7,
        description: "example desc",
        type: "supply",
        discount: 0
      }
    ]

    let dateToReturn: GachaMachine = initialState.value
    fakeMachineList.forEach((machine) => {
      if(machine.machineId === machineId) {
        dateToReturn = machine
        return;
      }
    })
    
    return dateToReturn
  }
);
export const machineInfoSlice = createSlice({
  name: 'machineInfo',
  initialState,
  reducers: {
    setMachineInfo: (state, data: PayloadAction<GachaMachine>) => {
      state.value = data.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMachineInfo.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchMachineInfo.fulfilled, (state, action) => {
      state.value = action.payload
      // Object.assign(, )
      state.loading = false
    })
    builder.addCase(fetchMachineInfo.rejected, (state, { payload }) => {
      console.log(payload)
      state.loading = false;
    })
  },
  
})

export const { setMachineInfo } = machineInfoSlice.actions

export const getMachineInfo = (state: RootState) => state.machineInfo.value

export default machineInfoSlice.reducer