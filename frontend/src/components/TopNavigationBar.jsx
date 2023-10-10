import React from 'react';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span onClick={props.homePhotos} className="top-nav-bar__logo">PhotoLabs</span>
    </div>
  )
}

export default TopNavigation;