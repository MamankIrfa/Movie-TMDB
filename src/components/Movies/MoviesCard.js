import React from 'react'
import Rating from '../../base/Rating'

const getPosterUrl = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}

function MoviesCard({ title, name, poster_path, release_date, first_air_date, vote_average }) {
  return (
    <div className='flex flex-col pl-5 gap-2 '>
      <div className='relative'>
        <img src={getPosterUrl(poster_path)} alt={poster_path} className='w-[150px] h-[225px] shadow-sm rounded-md' />
        <div className='absolute bottom-[-1.2rem] left-2'>
          <Rating percent={vote_average * 10} />
        </div>
      </div>
      <div className='flex flex-col px-3 pt-5 w-[150px]'>
        <div className='font-bold'>{title || name}</div>
        <p className='font-normal text-slate-500'>{release_date || first_air_date}</p>
      </div>
    </div>
  )
}

export default MoviesCard
