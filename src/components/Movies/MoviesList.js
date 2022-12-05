import React, { useContext, useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesPopular } from '../../features/movies/moviesSlice'
import { ToggleContext } from '../../App'
import Blur from '../../base/Blur'

function MoviesList() {
  const [movies, setMovie] = useState([])
  const [typeMovies] = useState(['movie/popular', 'tv/popular', 'movie/upcoming', 'movie/now_playing'])
  const dispatch = useDispatch()
  const { moviesPopular } = useSelector((state) => state.movies)
  const toggleType = useContext(ToggleContext)

  useEffect(() => {
    dispatch(getMoviesPopular({ type: typeMovies[toggleType?.toggleType] || 'movie/popular' }))
  }, [dispatch, typeMovies, toggleType])

  useEffect(() => {
    setMovie(moviesPopular?.results)
  }, [moviesPopular])

  console.log(moviesPopular?.results)

  return (
    <div className='flex pb-5 pl-5 pr-9 overflow-x-auto'>
      {movies?.map((movie, i) => {
        return <MoviesCard key={i} {...movie} />
      })}
      <div className='absolute top-0 right-0 w-16 h-full'>
        <Blur />
      </div>
    </div>
  )
}

export default MoviesList
