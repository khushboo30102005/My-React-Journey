import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Button = () => {
  const [theme, setTheme] = useContext(themeDataContext)

  return (
    <button onClick={() => setTheme(theme==='Light'? 'Dark' : 'Light')}>Change Theme</button>
  )
}

export default Button