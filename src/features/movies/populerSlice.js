import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get } from '../../services/AxiosServices'

const initialState = {
  moviesPopuler: [],
  status: false
}

export const getMoviesPopuler = createAsyncThunk('movies/popular', async ({ type, rejectWithValue }) => {
  try {
    const { data } = await get(`${type}`)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const populerSlice = createSlice({
  name: 'populer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesPopuler.fulfilled, (state, action) => {
        state.moviesPopuler = action.payload
      })
      .addCase(getMoviesPopuler.rejected, (state) => {
        state.status = true
      })
  }
})

export default populerSlice.reducer
