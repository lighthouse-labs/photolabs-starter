import React from 'react';

import DarkIcon from './DarkIcon';
import '../styles/DarkModeIcon.scss';

function DarkModeButton(props) {

  const { darkMode, dispatch } = props;

  const toggleDarkMode = () => {
    let toggleDarkMode = false;
    if (darkMode === true) {
      toggleDarkMode = false
    } else {
      toggleDarkMode = true
    }
    console.log(toggleDarkMode)
    dispatch({ type: 'SET_DARK_MODE', payload: toggleDarkMode });
  }

  return (
    <div onClick={toggleDarkMode} className="dark-mode">
      <DarkIcon /> 
      {/* {light === "on" ? <span><i>💡</i> I'm on!</span> :
      <span className="off"><i>💡</i> I'm off!</span>} */}
    </div>
  );
}

export default DarkModeButton;