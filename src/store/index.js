import { configureStore } from '@reduxjs/toolkit'
import countries from '../redux/countries'

export default configureStore({
  reducer: {
    countries
  },
})