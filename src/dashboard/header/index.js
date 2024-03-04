import React from 'react'
// import logo from "../../../public/logo192.png"

const Header = () => {
  return (
    <nav className='h-[10%] px-2 items-center flex justify-end border border-b-indigo-100 '>
        <span>
            <img src="/logo192.png" alt='default-profile-pic' className='w-8' />
        </span>
    </nav>
  )
}

export default Header