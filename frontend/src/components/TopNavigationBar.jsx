import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <span className='nav-topics'><TopicList /></span>
        <span className='nav-fav'><FavBadge /></span>
        <span className='nav-fav-count'>{props.favoritedCount}</span>
      </div>
    </div>
  );
};

export default TopNavigation;