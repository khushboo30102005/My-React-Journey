import { createContext, useState } from 'react';

export const themeDataContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('Light');
  return (
    <themeDataContext.Provider value={[theme, setTheme]}>
      {children}
    </themeDataContext.Provider>
  );
};

export default ThemeContext;
