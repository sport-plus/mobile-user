import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'

export const getAllSportCentersThunk = async (id = '', thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(`/sport-center/?sportId=${id}`)

      return response
    } catch (error) {
      console.log('sport error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getSportCentersByFilterThunk = async (
  options = {sportId: '', district: '', fieldType: ''},
  thunkAPI
) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(
        `/sport-center/?sportId=${options.sportId}&fieldType=${options.fieldType}&address=${options.district}`
      )
      return response
    } catch (error) {
      console.log('sport error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getAllSportCentersDetailThunk = async (id, thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(`/sport-center/${id}`)
      return response
    } catch (error) {
      console.log('sport center detail error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}
