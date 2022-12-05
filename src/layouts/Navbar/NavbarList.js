import React from 'react'
import FontAwesome from 'react-fontawesome'

function NavbarList({ items }) {
  const getItem = (item) => {
    let itemList = null
    switch (item.type) {
      case 'logo':
        itemList = <img className='h-5 min-w-[154px]' src={item.src} alt={item.name} />
        break
      case 'language':
        itemList = (
          <p className='border-white rounded-[3px] py-[2px] px-[7px] border-[1px] border-solid hover:bg-white hover:text-tmdbDarkBlue'>
            {item.name}
          </p>
        )
        break
      case 'icon':
        itemList = <FontAwesome name={item.name} size='lg' />
        break
      default:
        itemList = <p>{item.name} </p>
        break
    }
    return itemList
  }

  return (
    <div>
      <ul className='flex gap-7 items-center'>
        {items.map((item, i) => {
          return <li key={i}>{getItem(item)}</li>
        })}
      </ul>
    </div>
  )
}

export default NavbarList
