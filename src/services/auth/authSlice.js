import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {registerUserThunk} from './authThunk'
import {ToastAndroid} from 'react-native'

const initialState = {
  user: '',
  token: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

export const RegisterUser = createAsyncThunk('auth/RegisterUser', registerUserThunk)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMessageSuccess: (state, action) => {
      state.message = action.payload
      ToastAndroid.show(state.message)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        ToastAndroid.show(action.payload?.data.message)
        console.log('register user rejected')
      })
  },
})

export const {setMessageSuccess} = authSlice.actions
export default authSlice.reducer
