import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAllSportFieldsThunk, getSportFieldDetailThunk} from './sportFieldThunk'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  sportFieldsList: [],
  sportField: {},
}

export const getAllSportFields = createAsyncThunk(
  'sport-field/get-all-sport-fields',
  getAllSportFieldsThunk
)
export const getSportFieldDetail = createAsyncThunk(
  'sport-field/get-sport-field-detail',
  getSportFieldDetailThunk
)

const sportFieldSlice = createSlice({
  name: 'sportField',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSportFields.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllSportFields.fulfilled, (state, action) => {
        console.log('suceess')
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sportFieldsList = [...action.payload?.listSportFields]
      })
      .addCase(getAllSportFields.rejected, (state) => {
        console.log('rejected')
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
      .addCase(getSportFieldDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSportFieldDetail.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sportField = {...action.payload?.getSportField}
      })
      .addCase(getSportFieldDetail.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
  },
})

export default sportFieldSlice.reducer
