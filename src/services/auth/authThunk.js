import {axiosClient} from '../../api/axiosClient'

export const registerUserThunk = async (params, thunkAPI) => {
  console.log('params:', params.newUserOptions)
  try {
    const res = await axiosClient.post(`/user/register-user`, params.newUserOptions)
    if (res) {
      //   thunkAPI.dispatch(setMessageSuccess('Craete user account successfully'))
      params.navigation.navigate('LoginScreen', {replace: true})
    }
    return res
  } catch (error) {
    console.log('register error thunk: ', error)
    return thunkAPI.rejectWithValue(error)
  }
}
