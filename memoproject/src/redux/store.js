import { configureStore } from '@reduxjs/toolkit'
import { memoReducer } from './memo'

const store = configureStore({
  reducer: memoReducer
})

export default store