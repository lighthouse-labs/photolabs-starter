import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} get_photo_by_topics={props.  get_photo_by_topics}  />
      <FavBadge isFavPhotoExist={props.favourite.length} setSidePeekForLikedPhotos={props.setSidePeekForLikedPhotos} />
    </div>
  )
}

export default TopNavigation;