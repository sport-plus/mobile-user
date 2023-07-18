import AsyncStorage from '@react-native-async-storage/async-storage'
import {axiosClient} from '../../api/axiosClient'
import {Alert} from 'react-native'

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
      console.log(response)
      return response
    } catch (error) {
      console.log('Check booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}

export const getAllBookingThunk = async (_, thunkAPI) => {
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

export const createBookingThunk = async (params, thunkAPI) => {
  console.log('create booking: ', params.options)
  const accessToken = await AsyncStorage.getItem('accessToken')
  if (accessToken) {
    axiosClient.setHeaderAuth(JSON.parse(accessToken))
    try {
      const res = await axiosClient.post('/booking/create-booking-for-user', params.options)
      if (res.message === 'Sport Field created successfully.' && res.newBooking !== {}) {
        params.navigation.navigate('BookingSuccessScreen', {replace: true})
      } else {
        Alert.alert(res.message)
      }
      return res
    } catch (error) {
      console.log('create booking error thunk: ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
}
