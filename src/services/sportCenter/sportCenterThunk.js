import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'

export const getAllSportCentersThunk = async (_, thunkAPI) => {
  // const accessToken = document.cookie
  //   .split('; ')
  //   .find((row) => row.startsWith('accessToken'))
  //   ?.split('=')[1]
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl('/sport-center/')
      console.log(response)
      return response
    } catch (error) {
      console.log('sport error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}
