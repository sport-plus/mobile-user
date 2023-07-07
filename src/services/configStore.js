import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import SportReducer from './sport/sportSlice'
import sportCenterReducer from './sportCenter/sportCenterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sport: SportReducer,
    sportCenter: sportCenterReducer,
  },
})
