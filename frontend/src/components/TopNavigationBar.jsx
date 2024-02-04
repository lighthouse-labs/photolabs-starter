import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import FavBadge from './FavBadge';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div> <TopicList/> </div>
      <div> <FavBadge/> </div>
    </div>
  )
}

export default TopNavigationBar; 