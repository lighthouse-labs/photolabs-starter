import React from 'react';
import '../styles/DarkMode.scss';

const DarkMode = (props) => {
function handleClick() {
  props.switchMode()
}
let className = props.darkMode ? 'dark-mode-button-dark-mode' : 'dark-mode-button'

let text = !props.darkMode ? 'Darkmode' : 'Lightmode' 

 
    return (
    <div className='dark-mode'>
       <input type="checkbox" id="switch" />
        <label htmlFor="switch" onClick={handleClick}></label>
    </div>
  ) 
};

export default DarkMode;
