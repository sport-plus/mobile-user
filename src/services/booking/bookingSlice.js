import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {checkBookingsAvailableThunk, vaidateDateBooking} from './bookingThunk'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  availability: [],
}

export const checkBookingsAvailable = createAsyncThunk(
  'booking/check-bookings-available',
  checkBookingsAvailableThunk
)
export const validateDayBooking = createAsyncThunk(
  'booking/validate-day-booking',
  vaidateDateBooking
)

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkBookingsAvailable.pending, (state) => {
        state.isLoading = true
      })
      .addCase(checkBookingsAvailable.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.availability = [...action.payload?.availability]
      })
      .addCase(checkBookingsAvailable.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
      .addCase(validateDayBooking.pending, (state) => {
        state.isLoading = true
      })
      .addCase(validateDayBooking.fulfilled, (state, action) => {
        console.log(action.payload?.message)
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = action.payload?.message
      })
      .addCase(validateDayBooking.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })
  },
})

export default bookingSlice.reducer
