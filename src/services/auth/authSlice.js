import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {loginUserThunk, registerUserThunk} from './authThunk'
import {ToastAndroid} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import Toast from 'react-native-toast-message'
// const userfromAsyncStorage = AsyncStorage.getItem('userInfo')
//   ? AsyncStorage.getItem('userInfo')
//   : ''

const initialState = {
  user: {},
  token: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

export const RegisterUser = createAsyncThunk('auth/RegisterUser', registerUserThunk)
export const LoginUser = createAsyncThunk('auth/LoginUser', loginUserThunk)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
      })
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.user = action.payload?.user
        state.token = action.payload?.token
        state.message = 'success'
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        ToastAndroid.show(action.payload)
      })
  },
})

export default authSlice.reducer
