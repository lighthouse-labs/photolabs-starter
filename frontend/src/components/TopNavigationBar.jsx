import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({topics, isFavorite}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div> <TopicList topics={ topics }/> </div>
      <div> <FavBadge isFavorite={isFavorite} /> </div>
    </div>
  )
}

export default TopNavigationBar; 