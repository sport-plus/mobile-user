import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {getAllSportsThunk} from './sportThunk'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  sports: [],
  sportsOfOwner: [],
}

export const getAllSports = createAsyncThunk('sport/get-all-sports', getAllSportsThunk)

const sportSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSports.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllSports.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sports = [...action.payload?.listSport]
      })
      .addCase(getAllSports.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
  },
})

export default sportSlice.reducer
