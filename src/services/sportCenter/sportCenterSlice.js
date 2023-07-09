import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAllSportCentersDetailThunk, getAllSportCentersThunk} from './sportCenterThunk'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  sportCenters: [],
  sportCenterDetail: {},
}

export const getAllSportCenters = createAsyncThunk(
  'sport/get-all-sports-center',
  getAllSportCentersThunk
)

export const getSportCenterDetail = createAsyncThunk(
  'sport/get-sports-center-detail',
  getAllSportCentersDetailThunk
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
      .addCase(getSportCenterDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSportCenterDetail.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sportCenterDetail = {...action.payload?.getSportCenter}
      })
      .addCase(getSportCenterDetail.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
  },
})

export default sportCenterSlice.reducer
