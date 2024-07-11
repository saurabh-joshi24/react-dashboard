import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    value: {
        currentPage: 1,
        totalPages: 1,
        pageLimit: 5,
        itemsPerPage: 20,
        indexOfLastItem: 0,
        indexOfFirstItem: 0
    },
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = {
            ...state.value,
            currentPage: action.payload
        }
    },
    setTotalPages: (state, action) => {
        state.value = {
            ...state.value,
            totalPages: action.payload
        }
    },
    setLastIndex: (state, action) =>{
        state.value = {
            ...state.value,
            indexOfLastItem: action.payload
        }
    },
    setFirstIndex: (state, action) =>{
        state.value = {
            ...state.value,
            indexOfFirstItem: action.payload
        }
    },
    setItemsPerPage: (state, action) =>{
        state.value = {
            ...state.value,
            itemsPerPage: action.payload
        }
    }
  },
})

export const { setCurrentPage, setTotalPages, setLastIndex, setFirstIndex, setItemsPerPage } = paginationSlice.actions

export default paginationSlice.reducer