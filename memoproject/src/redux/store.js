import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './memo'

const store = configureStore({
  reducer: memo
})

export default store