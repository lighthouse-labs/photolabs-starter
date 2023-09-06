import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  let displayAlert;

  props.likedPhotos.length >= 1 ? displayAlert = true : displayAlert = false;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar'>
        <TopicList
          topicData={props.topicData}
          getPhotosByTopics={props.getPhotosByTopics}
        />
        <FavBadge isFavPhotoExist={displayAlert}
        />
      </div>
    </div>
  )
};

export default TopNavigation;