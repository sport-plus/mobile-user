import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, logoutThunk } from './authThunk';
// import { toast } from 'react-toastify';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getUserfromLocalStorage = AsyncStorage.getItem('userInfo') ? JSON.parse(AsyncStorage.getItem('userInfo')) : null;

const initialState = {
  user: '',
  token: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const LoginUser = createAsyncThunk('auth/LoginUser', loginUserThunk);
// export const logoutAccount = createAsyncThunk('auth/Logout', logoutThunk);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.message = 'success';
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      // .addCase(logoutAccount.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(logoutAccount.fulfilled, (state) => {
      //   state.isLoading = false;
      //   state.isError = false;
      //   state.isSuccess = true;
      //   state.user = '';
      //   toast.success('Logout Successfully');
      // })
      // .addCase(logoutAccount.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.isSuccess = false;
      // });
  },
});

export default authSlice.reducer;