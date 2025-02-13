import { configureStore } from '@reduxjs/toolkit'
import firstReducer from '../features/todo/firstSlice'

export default configureStore({
  reducer: {
   todos: firstReducer,
  },
})