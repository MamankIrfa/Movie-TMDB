import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../services/AxiosServices'

const initialState = {
  moviesPopular: [],
  status: false
}

export const getMoviesPopular = createAsyncThunk('movies/popular', async ({ type, rejectWithValue }) => {
  try {
    const { data } = await get(`${type}`)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesPopular.fulfilled, (state, action) => {
        state.moviesPopular = action.payload
      })
      .addCase(getMoviesPopular.rejected, (state) => {
        state.status = true
      })
  }
})

export default moviesSlice.reducer
