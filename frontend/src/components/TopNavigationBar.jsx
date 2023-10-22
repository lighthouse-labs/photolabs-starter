import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topicData, state }) => {
  const favPhotos = state.favPhotos;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList topicData={topicData} />
      < FavBadge selected={favPhotos.length > 0} />
      {/* if photos in favphotos then favbadge has notification in topnav */}
    </div>
  )
}

export default TopNavigation;