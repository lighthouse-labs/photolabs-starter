import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//need to make so isfavphotoexist only true if photos in favPhotos array
const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList />
      < FavBadge isFavPhotoExist={props.favPhotos}/>
    </div>
  )
}

export default TopNavigation;