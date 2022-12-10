import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../services/AxiosServices'

const initialState = {
  moviesPopuler: [],
  status: false
}

export const getMoviesPopuler = createAsyncThunk('movies/populer', async ({ type, rejectWithValue }) => {
  try {
    const { data } = await get(`${type}`)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getMoviesSearch = createAsyncThunk('movies/search', async (query) => {
  const { data } = await get(`search/movie?&query=${query}&language=en-US&page=1&include_adult=false`)
  console.log(data)
  return data
})

export const populerSlice = createSlice({
  name: 'populer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesSearch.fulfilled, (state, action) => {
        state.moviesPopuler = action?.payload
      })
      .addCase(getMoviesPopuler.fulfilled, (state, action) => {
        state.moviesPopuler = action?.payload
      })
      .addCase(getMoviesPopuler.rejected, (state) => {
        state.status = true
      })
  }
})

export default populerSlice.reducer
