import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between px-8 py-12 bg-pink-900'>
      <h2 className=' text-3xl font-bold'>Khushboo</h2>
      <div className='flex gap-8'>
        <Link className=' text-2xl font-semibold' to="/">Home</Link>
        <Link className=' text-2xl font-semibold' to="/about">About Us</Link>
        <Link className=' text-2xl font-semibold' to="/courses">Courses</Link>
        <Link className=' text-2xl font-semibold' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default NavBar