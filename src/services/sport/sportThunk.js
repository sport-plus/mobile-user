import {axiosClient} from '../../api/axiosClient'

export const getAllSportsThunk = async (_, thunkAPI) => {
  try {
    const response = await axiosClient.getByUrl('/sport/')
    return response
  } catch (error) {
    console.log(error)
  }
}
