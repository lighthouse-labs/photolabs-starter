import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
const TopNavigation = (props) => {
  const { likedPhotos } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <TopicList topics ={props.topics}/>
      </div>
      <FavBadge isFavPhotoExist={likedPhotos.length > 0}/>
      </div>
        );
};

export default TopNavigation;