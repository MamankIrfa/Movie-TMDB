import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../services/AxiosServices'

const initialState = {
  moviesSearch: [],
  status: false
}

export const getMoviesSearch = createAsyncThunk('movies/popular', async ({ query, rejectWithValue }) => {
  try {
    const { data } = await get(`search/movie?&query=${query}&language=en-US&page=1&include_adult=false`)
    console.log(data)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesSearch.fulfilled, (state, action) => {
        state.moviesSearch = action.payload
      })
      .addCase(getMoviesSearch.rejected, (state) => {
        state.status = true
      })
  }
})

export default searchSlice.reducer
