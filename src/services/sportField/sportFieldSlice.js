import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {
  getAllSportFieldsThunk,
  getSportFieldDetailThunk,
  getSportFieldTypeThunk,
} from './sportFieldThunk'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  sportFieldsList: [],
  sportField: {},
  sportFieldType: [],
}

export const getAllSportFields = createAsyncThunk(
  'sport-field/get-all-sport-fields',
  getAllSportFieldsThunk
)

export const getSportFieldDetail = createAsyncThunk(
  'sport-field/get-sport-field-detail',
  getSportFieldDetailThunk
)

export const getSportFieldType = createAsyncThunk(
  'sport-field/get-sport-field-type',
  getSportFieldTypeThunk
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
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sportFieldsList = [...action.payload?.listSportFields]
      })
      .addCase(getAllSportFields.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
      .addCase(getSportFieldDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSportFieldDetail.fulfilled, (state, action) => {
        console.log(action.payload)
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
      .addCase(getSportFieldType.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSportFieldType.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.sportFieldType = [...action.payload?.fieldTypes]
      })
      .addCase(getSportFieldType.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
  },
})

export default sportFieldSlice.reducer
