import React from 'react';
import darkModeSymbol from '../assets/darkModeSymbol.svg';
import lightModeSymbol from '../assets/lightModeSymbol.svg';

const DarkModeIcon = ({toggleDarkMode, darkMode}) => {
  return (
    <div className="top-nav-bar__dark-mode-symbol" onClick={() => toggleDarkMode()}>
      <img src={`${darkMode ? lightModeSymbol : darkModeSymbol }`} alt="dark mode symbol"/>
    </div>
  );
};

export default DarkModeIcon;