import  { useContext } from 'react';
import Nav2 from './Nav2';
import { themeDataContext } from '../context/ThemeContext';
import Button from './Button';

const Nav = () => {
  return (
    <div className="nav-container">
      <h1>Khushboo</h1>
      <Nav2 />
      <Button/>
    </div>
  );
};

export default Nav;
