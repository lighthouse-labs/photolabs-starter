import React from 'react';

import DarkIcon from './DarkIcon';
import '../styles/DarkModeIcon.scss';

function DarkModeButton(props) {

  const { darkMode, dispatch } = props;

  const toggleDarkMode = () => {
    
    let toggleDarkMode = false;
    toggleDarkMode = (darkMode === true) ? false : true;

    dispatch({ type: 'SET_DARK_MODE', payload: toggleDarkMode });
  }

  return (
    <div onClick={toggleDarkMode} className="dark-mode">
      <DarkIcon /> 
    </div>
  );
}

export default DarkModeButton;