import { createSlice } from '@reduxjs/toolkit'

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    value: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCountries } = countriesSlice.actions

export default countriesSlice.reducer