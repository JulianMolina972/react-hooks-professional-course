import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../Styles/Header.css'

export const Header = () => {


  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    // theme === 'bt-light' ? setTheme('bt-dark') : setTheme('bt-light');
  }

  return (
    <div className='Header'>
      <h1> React Hooks</h1>
      <button 
      type='button' 
      onClick={handleClick}
      >
        {darkMode ? 'Light Mode': 'Dark Mode'}
      </button>
      {/* <button 
      type='button' 
      onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Dark Mode 2': 'Light Mode 2'}
      </button> */}
    </div>
  );
}
