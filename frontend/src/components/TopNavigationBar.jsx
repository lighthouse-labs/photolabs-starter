import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, favoritedPhotos }) => {
  const isFavoritePhotoExist = favoritedPhotos && favoritedPhotos.length > 0; 

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Topics navigation */}
      <TopicList topics={topics} />
      {/* Heart icon for liked photos */}
      <FavBadge isFavPhotoExist={isFavoritePhotoExist} favoritedCount={favoritedPhotos.length} />
      {isFavoritePhotoExist && <span className="fav-count">{favoritedPhotos.length}</span>}
    </div>
  )
}

export default TopNavigation;