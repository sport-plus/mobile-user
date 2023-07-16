// export const getAllSportFieldsThunk = async (sportCenterId, thunkAPI) => {
//     const accessToken = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('accessToken'))
//       ?.split('=')[1];
//     if (accessToken) {
//       axiosClient.setHeaderAuth(accessToken);
//       try {
//         const response = await axiosClient.getByUrl(`/sport-center/get-sport-field-list/${sportCenterId}`);
//         return response;
//       } catch (error) {
//         console.log('sport error thunk: ', error);
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   };

import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'

export const getAllSportFieldsThunk = async (_, thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl('/sport-field/')
      return response
    } catch (error) {
      console.log('sport error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getSportFieldDetailThunk = async (sportFieldId, thunkAPI) => {
  const accessToken = AsyncStorage.getItem('accessToken')

  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(`/sport-field/${sportFieldId}`)
      return response
    } catch (error) {
      console.log('sport error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getSportFieldTypeThunk = async (id, thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')

  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(`/sport-field/types?sportCenterId=${id}`)
      return response
    } catch (error) {
      console.log('sport error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}
