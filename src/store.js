import { configureStore } from '@reduxjs/toolkit'
import useReducer from "./redux/userData"
export const store = configureStore({
  reducer: {
    users: useReducer
  },
})