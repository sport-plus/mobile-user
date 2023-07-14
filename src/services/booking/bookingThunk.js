import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'

export const checkBookingsAvailableThunk = async (options, thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(
        `/booking/bookings-available?date=${options.day}&sportCenterId=${options.id}&fieldType=${options.fieldType}`
      )
      return response
    } catch (error) {
      console.log('Check booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const vaidateDateBooking = async (options, thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(
        `/booking/validate-date-booking?date=${options.day}&start=${options.startDay}&end=${options.endDay}&sportFieldId=${options.id}`
      )
      return response
    } catch (error) {
      console.log('Check booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getAllBookingThunk = async (_, thunkAPI) => {
  console.log('bbbb')
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl('/booking/customer-history-booking')
      return response
    } catch (error) {
      console.log('get all booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getBookingDetailThunk = async (id, thunkAPI) => {
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const response = await axiosClient.getByUrl(`/booking/${id}`)
      return response
    } catch (error) {
      console.log('get booking detail error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}
