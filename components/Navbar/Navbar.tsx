import Link from 'next/link'
import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <header className='shadow-lg bg-white dark:bg-neutral-800 sticky top-0 z-50'>
      <div className='w-full max-w-screen-xl mx-auto p-2 flex justify-between items-center gap-3 h-14'>
        <Link href={"/"}>Logo</Link>

        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Navbar