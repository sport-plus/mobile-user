// import Cookie from 'js-cookie';
// import axiosClient from 'src/api/axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosClient from '../../api/axiosClient';
import axios from 'axios';

export const loginUserThunk = async (params, thunkAPI) => {
  console.log("Params: " + params.inputs.email);
  try {
    const res = await axiosClient.post(`user/login`, params.inputs);
    const resFinal = res.json();
    AsyncStorage.setItem('accessToken', resFinal.token);
    AsyncStorage.setItem('refreshToken', resFinal.user.refreshToken);
    const userLocalStorage = {
      firstname: resFinal.user.firstname,
      lastname: resFinal.user.lastname,
      email: resFinal.user.email,
      phone: resFinal.user.phone,
      image: resFinal.user.image,
      gender: resFinal.user.gender,
      YOB: resFinal.user.YOB,
      role: resFinal.user?.role.name,
    };
    params.navigation.navigate('HomeSceen');
    // AsyncStorage.setItem('userInfo', JSON.stringify(userLocalStorage));
    return resFinal;
  } catch (error) {
    console.log('login error thunk: ', error);
    const message = await error.data.message;
    return thunkAPI.rejectWithValue(message);
  }
};

// export const logoutThunk = async (navigate, thunkAPI) => {
//   try {
//     // const res = await axiosClient.getByUrl(/user/logout);
//     AsyncStorage.remove('refreshToken');
//     AsyncStorage.remove('accessToken');
//     AsyncStorage.remove('userInfo');

//     navigate('/login');
//     AsyncStorage.removeItem('userInfo');
//   } catch (error) {
//     console.log('logout error thunk: ', error);
//     return thunkAPI.rejectWithValue(error);
//   }
// };