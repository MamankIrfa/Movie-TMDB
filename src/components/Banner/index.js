import React, { useRef } from 'react'

import SearchButton from '../../base/Button/SearchButton'
import SearchInput from '../../base/Input/SearchInput'

function Banner() {
  const SearchInputRef = useRef()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  const handleClick = () => {
    alert(SearchInputRef.current.value)
  }

  return (
    <div className='h-[300px] bg-banner bg-cover'>
      <div className='flex flex-col gap-10 px-10 py-16'>
        <div className='text-white'>
          <h1 className='font-extrabold text-5xl'>Welcome.</h1>
          <h3 className='font-semibold text-[2rem]'>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className='relative'>
          <SearchInput ref={SearchInputRef} onKeyDown={handleKeyDown} />
          <div className='absolute top-0 right-0'>
            <SearchButton onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
