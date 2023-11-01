import React from 'react';
import LightButton from '../assets/icons8-sun-32.png';
import DarkButton from '../assets/icons8-dark-mode-30.png';

const ThemeButton = ({ themeToggler, darkTheme }) => {
  return (
    <div onClick={themeToggler} className="theme-button">
      <img src={darkTheme ? LightButton : DarkButton} alt="change-theme-button" />
    </div>
  );
};

export default ThemeButton;
