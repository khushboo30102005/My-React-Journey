import React from 'react'

const NavBar = ({theme,setTheme}) => {
  console.log(theme);
  console.log(setTheme);
  return (
    <div>
      <p>{theme}</p>
      <button onClick={() => setTheme('dark' )} >Change Theme</button>
    </div>
  )
}

export default NavBar