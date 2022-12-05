import React from 'react'
import { NavItemsLeft, NavItemsRight } from './NavbarItems'
import NavbarList from './NavbarList'

function Navbar() {
  return (
    <nav className='h-16 bg-tmdbDarkBlue flex text-white font-semibold justify-between items-center max-w-[1320px] mx-auto px-10'>
      <NavbarList items={NavItemsLeft} />
      <NavbarList items={NavItemsRight} />
    </nav>
  )
}

export default Navbar
