import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className='nav-topics'><TopicList /></span>
      <span className='nav-fav'><FavBadge /></span>
    </div>
  );
};

export default TopNavigation;