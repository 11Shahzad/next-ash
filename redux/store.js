import { configureStore } from '@reduxjs/toolkit'
import availability from './ashSlice'
import alertEmail from './footerSlice'
export const store = configureStore({
  reducer: {
    alertEmail,
    availability,
  },
})