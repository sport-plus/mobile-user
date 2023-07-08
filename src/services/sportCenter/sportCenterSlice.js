import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAllSportCentersThunk} from './sportCenterThunk'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  sportCenters: [],
}

export const getAllSportCenters = createAsyncThunk(
  'sport/get-all-sports-center',
  getAllSportCentersThunk
)

const sportCenterSlice = createSlice({
  name: 'sportCenter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSportCenters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllSportCenters.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sportCenters = [...action.payload?.listSportCenter]
      })
      .addCase(getAllSportCenters.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
  },
})

export default sportCenterSlice.reducer
