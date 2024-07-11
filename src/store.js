import { configureStore } from '@reduxjs/toolkit'
import countries from './redux/countries'
import pagination from './redux/pagination'

export default configureStore({
  reducer: {
    countries,
    pagination
  },
})