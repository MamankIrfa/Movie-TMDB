import React, { useContext, useState } from 'react'
import { TitleContext, ToggleContext } from '../../App'

function Switch() {
  const [isToggleType, setIsToggleType] = useState(0)
  const titleType = useContext(TitleContext)
  const toggleType = useContext(ToggleContext)
  const activeColor = 'bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]'

  const handleClick = (event) => {
    setIsToggleType(event)
  }

  toggleType.setToggleType(isToggleType)

  return (
    <div className='hover:cursor-pointer h-8 border-solid border-tmdbDarkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative z-[1]'>
      {titleType.map((title, i) => {
        return (
          <div
            key={i}
            onClick={handleClick.bind(null, i)}
            className={`py-1 px-5 h-8 rounded-[30px] ${isToggleType === i ? activeColor : null}`}
          >
            {title}
          </div>
        )
      })}
      <div
        className='h-8 w-28  bg-tmdbDarkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in'
        style={
          isToggleType === 0
            ? { left: '1px', width: '111px' }
            : isToggleType === 1
            ? { left: '111px', width: '79px' }
            : isToggleType === 2
            ? { left: '190px', width: '98px' }
            : isToggleType === 3
            ? { left: '287px', width: '117px' }
            : null
        }
      ></div>
    </div>
  )
}

export default Switch
