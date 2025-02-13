import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/firstSlice'

export default configureStore({
  reducer: {
   counter: counterReducer,
  },
})