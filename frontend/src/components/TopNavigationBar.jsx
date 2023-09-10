import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = () => {
  const isFavoritePhotoExist = true; 

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Topics navigation */}
      <TopicList />
      {/* Heart icon for liked photos */}
      <FavBadge isFavPhotoExist={isFavoritePhotoExist} />
    </div>
  )
}

export default TopNavigation;