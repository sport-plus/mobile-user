import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'

export const checkBookingsAvailableThunk = async (options, thunkAPI) => {
  console.log('options day:', options.day)
  console.log('options id:', options.id)
  console.log('options field type:', options.fieldType)
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(
        `/booking/bookings-available?date=${options.day}&sportCenterId=${options.id}&fieldType=${options.fieldType}`
      )
      console.log(response)
      return response
    } catch (error) {
      console.log('Check booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const vaidateDateBooking = async (options, thunkAPI) => {
  // console.log('options: ', options)
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(
        `/booking/validate-date-booking?date=${options.day}&start=${options.startDay}&end=${options.endDay}&sportFieldId=${options.id}`
      )
      console.log(response)
      return response
    } catch (error) {
      console.log('Check booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}
