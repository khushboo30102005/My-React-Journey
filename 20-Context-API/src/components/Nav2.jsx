import React, { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Nav2 = () => {
  const  [theme, setTheme] = useContext(themeDataContext)
  console.log(theme);
  return (
    <div className='nav2'>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>Services</h1>
      <h4>{theme}</h4>
    </div>
  )
}

export default Nav2