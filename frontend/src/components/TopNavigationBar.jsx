import React from 'react';
import TopicList from './TopicList';


import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} handleImageFetch={props.handleImageFetch} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;