import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics }) => {
  const isFavoritePhotoExist = true; 

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Topics navigation */}
      <TopicList topics={topics} />
      {/* Heart icon for liked photos */}
      <FavBadge isFavPhotoExist={isFavoritePhotoExist} />
    </div>
  )
}

export default TopNavigation;