import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'

//https://sport-plus-backend.azurewebsites.net/api/sport-center/?sportId=646f1ee2a20878e6b46647d8&fieldType=5x5&address=Qu%E1%BA%ADn%202

export const getAllSportCentersThunk = async (id = '', thunkAPI) => {
  console.log('id=', id)
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
  console.log('aaa', options)
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(
        `/sport-center/?sportId=${options.sportId}&fieldType=${options.fieldType}&address=${options.district}`
      )
      console.log('bbbb: ', response)
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
